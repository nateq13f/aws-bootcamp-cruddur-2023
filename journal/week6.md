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

### Challenges


- Did not have env `AWS_ACCOUNT_ID` set so the ECR login command was not working
```
export AWS_ACCOUNT_ID=xxxxxxx036
gp env AWS_ACCOUNT_ID=xxxxxxx036
```