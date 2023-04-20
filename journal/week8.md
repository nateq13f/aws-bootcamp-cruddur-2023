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

ADDING Sharp because only Sharp is required, not the whole node.modules file--->
```
npm install
rm -rf node_modules/sharp
SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install --arch=x64 --platform=linux --libc=glibc sharp
```
Create new empty init files ----->
npm init -y
Delete --->
delete `node.modules` file



- Add node_modules to `.gitignore` file


- Created assets bucket manually and imported it through CDK.
- Manually create the assets folder in assets bucket `original` and `processed`

ipnut env var of `DOMAIN_NAME` for serverless scripts

```
export DOMAIN_NAME=fireforeffect.live
gp env DOMAIN_NAME=fireforeffect.live
```

### Monitor the Lambda function process
- Create s3 event notification for PUT, for our use-case the cruddur app
- Lambda console -> Look at the Lambda trigger
- Look at the CloudWatch log group


### UPLOADING avatar setup for frontend

- Removed x-rays variables from `backend-flask.env` temporarily
```
AWS_XRAY_URL=*4567-nateq13f-awsbootcampcru-bdf1csl7gwh.ws-us94.gitpod.io*
AWS_XRAY_DAEMON_ADDRESS=xray-daemon:2000
```

- Create new sql query file call `show.sql` to pull user profile data

- Implement profile display
- Create `EditProfileButton.js` component just like `CrudButton.js` copmponent
and `EditProfileButton.css` to go along with it for the CSS part.





### Challenges --
- my buket name was named `cruddur-thumbs` when it should have been my own domains name, so I used `cdk destroy` to tear down all resources created by the CDK to start fresh and grab new env vars.
- Had to also reset the env var for THUMBING_BUCKET_NAME to my own domain `assets.fireforeffect.live`
- Lambda function NOT logging and throwing error during s3-put test
- BIG issue with Lambda NOT logging was solved by correcting my path in env vars, I ended it at /lambdas/.
`THUMBING_TOPIC_NAME="/workspace/aws-bootcamp-cruddur-2023/aws/lambdas/process-images/"`

STUCK at ----->>

Lambda error in CloudWatch ->
```
2023-04-16T04:54:19.563Z	24b989ce-418a-459a-841d-d9d033def249	ERROR	Invoke Error 	
{
    "errorType": "Error",
    "errorMessage": "Expected positive integer for height but received NaN of type number",
    "stack": [
        "Error: Expected positive integer for height but received NaN of type number",
        "    at Object.invalidParameterError (/var/task/node_modules/sharp/lib/is.js:135:10)",
        "    at Sharp.resize (/var/task/node_modules/sharp/lib/resize.js:268:16)",
        "    at processImage (/var/task/s3-image-processing.js:29:6)",
        "    at exports.handler (/var/task/index.js:27:32)",
        "    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
    ]
}
```

FIXED ---- typo in lib CDK file, `PRCESS_HEIGHT`.. Lamnda resolves and processes correctly

- My cruddur-net somehow got deleted.. so I installed it again and my docker-compose went up.
