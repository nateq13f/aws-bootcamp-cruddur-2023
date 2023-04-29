# Week 9 — CI/CD with CodePipeline, CodeBuild and CodeDeploy

Code pipeline is so you can automate the process of code changes. Build and push to ECR.

## Codepipeline /  CodeBuild = 
1. Create - name
2. GithubV2
3. Install app (ONLY the repo that we need)
4. Go to main branch and create a new branch `prod` off of main
5. code pipeline SOURCE = repo and branch that I am working with,, repo = `nateq13f/aws-bootcamp-cruddur-2023` and branch `prod` 
6. SKIP Build stage to add it later
7. Deploy stage = ECS with Cluster `cruddur` and Service `backend-flask`
8. Edit -> Add Source stage `bake-image` and
9. Add Target Group `Codebuild`
10. Go to Codebuild and create project
11. CodeBuild = `cruddur-backend-flask-bake-image`
12. Enable `build badge` , Source github repo.
13. Webhook = CHECK on `Rebuild every time a code change is pushed to this repository`
14. Event Type == `Push` and `PULL_REQUEST_MERGED` 
15. Privileged CHECK yes.
16. Timeout = 20 minutes
17.  Create `buildspec.yml` file for build specs of CodeBuild including env variables from ECS vars.
18. Buildspec for CodeBuild is from file `backend-flask/buildspec.yml`


Must still have IAM role ECR permissions



## CodePipeline

1. Edit -> Add Source stage `bake-image`
2. Add Build stage `bake`
3. Build stage output = `ImageDefinition`
4. Deploy stage Input Artifact = `ImageDefinition`

### Challenges

- Make sure IAM role has correct permissions for ECR and Codebuild/Pipeline

```

{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "VisualEditor0",
      "Effect": "Allow",
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:CompleteLayerUpload",
        "ecr:GetAuthorizationToken",
        "ecr:InitiateLayerUpload",
        "ecr:PutImage",
        "ecr:UploadLayerPart",
        "ecr:BatchGetImage",
        "ecr:GetDownloadUrlForLayer"
      ],
      "Resource": "*"
    }
  ]
}
```