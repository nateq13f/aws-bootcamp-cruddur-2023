# Week 8 — Serverless Image Processing

- `cdk synth` - just shows you in the console what CDK will create in your AWS environment.

- `cdk bootstrap` - Creates a CDK CFN stack for your REGION. You only need to run this once.

- Import dotenv file to CDK stack file with `import * as dotenv from 'dotenv'` and `dotenv.config();`

- Add ` cp .env.example .env` to gitpod file or CLI to copy CDK env vars to normal env vars

cd aws/lambdas/process-images
npm init -y
npm i sharp
- Install SDK for s3
npm i @aws-sdk/client-s3

- Add node_modules to `.gitignore` file


- Created assets bucket manually and imported it through CDK.
- Manually create the assets folder in assets bucket `original` and `processed`

ipnut env var of `DOMAIN_NAME` for serverless scripts

```
export DOMAIN_NAME=fireforeffect.live
gp env DOMAIN_NAME=fireforeffect.live
```

## Monitor the Lambda function process
- Create s3 event notification for POST, for our use-case the cruddur app
- Lambda console -> Look at the Lambda trigger
- Look at the CloudWatch log group

### Challenges --
- my buket name was named `cruddur-thumbs` when it should have been my own domains name, so I used `cdk destroy` to tear down all resources created by the CDK to start fresh and grab new env vars.
- Had to also reset the env var for THUMBING_BUCKET_NAME to my own domain `assets.fireforeffect.live`
