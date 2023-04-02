# Week 6 — Deploying Containers

## Tasks
- Make `test` script for easy test of DB connection
- Make Flask health check function
- Make file `bin/flask/health-check`

```
@app.route('/api/health-check')
def health_check():
  return {'success': True}, 200
```

 - Make CloudWatch log groups through AWS CLI

 ```
aws logs create-log-group --log-group-name "/cruddur/fargate-cluster"
aws logs put-retention-policy --log-group-name "/cruddur/fargate-cluster" --retention-in-days 1
 ```


- Made ECS cluster
```
aws ecs create-cluster \
--cluster-name cruddur \
--service-connect-defaults namespace=cruddur
```

- Create ECR repos   (registry for containers)
- 3 whole repos for us
Pulling 3.10 slim buster then pushing to OUR ECR.

1 - Create repo for python
```
aws ecr create-repository \
  --repository-name cruddur-python \
  --image-tag-mutability MUTABLE
```

You can view the push commands on the ECR console
- Login command
```
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin "$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com"
```
- Pull from dockerhub, tag, and push the python image to ECR

```
docker pull python:3.10-slim-buster
docker tag python:3.10-slim-buster $ECR_PYTHON_URL:3.10-slim-buster
docker push $ECR_PYTHON_URL:3.10-slim-buster
```

- On `backend-flask/Dockerfile` replace `FROM python:3.10-slim-buster` with `FROM 579018833036.dkr.ecr.us-east-1.amazonaws.com/cruddur-python:3.10-slim-buster`

2 - Create repo for Flask
```
aws ecr create-repository \
  --repository-name backend-flask \
  --image-tag-mutability MUTABLE
```

- BUILD image from here (.) , and tag and push
```
docker build -t backend-flask .
docker tag backend-flask:latest $ECR_BACKEND_FLASK_URL:latest
docker push $ECR_BACKEND_FLASK_URL:latest
```

- SET paramaters in SSM parameter store though CLI commands

```
aws ssm put-parameter --type "SecureString" --name "/cruddur/backend-flask/AWS_ACCESS_KEY_ID" --value $AWS_ACCESS_KEY_ID
aws ssm put-parameter --type "SecureString" --name "/cruddur/backend-flask/AWS_SECRET_ACCESS_KEY" --value $AWS_SECRET_ACCESS_KEY
aws ssm put-parameter --type "SecureString" --name "/cruddur/backend-flask/CONNECTION_URL" --value $PROD_CONNECTION_URL
aws ssm put-parameter --type "SecureString" --name "/cruddur/backend-flask/ROLLBAR_ACCESS_TOKEN" --value $ROLLBAR_ACCESS_TOKEN
aws ssm put-parameter --type "SecureString" --name "/cruddur/backend-flask/OTEL_EXPORTER_OTLP_HEADERS" --value "x-honeycomb-team=$HONEYCOMB_API_KEY"
```

- Adding policies for ECS tasks to get the SSM paramaters
- Created task role through CLI
```
aws iam create-role \
    --role-name CruddurTaskRole \
    --assume-role-policy-document "{
  \"Version\":\"2012-10-17\",
  \"Statement\":[{
    \"Action\":[\"sts:AssumeRole\"],
    \"Effect\":\"Allow\",
    \"Principal\":{
      \"Service\":[\"ecs-tasks.amazonaws.com\"]
    }
  }]
}"
```

- Backup to ROOT dir and run Create ECS task definition for backend since its aws/task-definitions
```
aws ecs register-task-definition --cli-input-json file://aws/task-definitions/backend-flask.json
```

- Created security group for ECS containers
  1 - Grab and set VPC ID and SG ID

- Create service name "backend-flask"
- Have to install SSM client first

- Delete service and run it through CLI using task defintion JSON file and update the security group and subnets for my own environment

### Challenges


- Did not have env `AWS_ACCOUNT_ID` set so the ECR login command was not working
```
export AWS_ACCOUNT_ID=xxxxxxx036
gp env AWS_ACCOUNT_ID=xxxxxxx036
```