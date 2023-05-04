# Week 10 — CloudFormation Part 1

- Must create CFN bucket for CFN artifacts
```
aws s3 mb s3://cfn-artifacts-nate
export CFN_BUCKET="cfn-artifacts-nate"
gp env CFN_BUCKET="cfn-artifacts-nate"
```

- Errors for CFN are BEST monitored through CloudTrail event logging

- Create bin/cfn file scripts to run CFN deployment


Create `task-definition.guard` file for the task-definition for ECS for CFN to use from a CFN file.
MUST install with `cargo install cfn-guard`, and put it in gitpod fule

- CFN Guard is policy-as-code evaluation tool. Primarily used to validate CFN.
