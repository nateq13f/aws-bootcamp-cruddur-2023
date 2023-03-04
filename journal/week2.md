# Week 2 — Distributed Tracing

```
# runs npm i at start of gitpod (which is needed to dock up ------>>      
  - name: react-js
    command: |
      cd frontend-react-js
      npm i
# ------>>

```

## HoneyComb

Was using the wrong Honeycomb API key and then I fixed it but with a typo, worked on 3rd time..

## X-Ray

1. Must install SDK into requirements.txt to install it

2. Created X-ray groups

```
gitpod /workspace/aws-bootcamp-cruddur-2023 (main) $ aws xray create-group    --group-name "Cruddur"    --filter-expression "service(\"backend-flask\")"
{
    "Group": {
        "GroupName": "Cruddur",
        "GroupARN": "arn:aws:xray:us-east-1:579018833036:group/Cruddur/NUHQWRNRARXI4TEXLAPUDLKVVLTHGYPVSQSSLX26F2CW6NEHM67A",
        "FilterExpression": "service(\"backend-flask\")",
        "InsightsConfiguration": {
            "InsightsEnabled": false,
            "NotificationsEnabled": false
        }
    }
}
gitpod /workspace/aws-bootcamp-cruddur-2023 (main) $ aws xray create-sampling-rule --cli-input-json file://aws/json/xray.json
{
    "SamplingRuleRecord": {
        "SamplingRule": {
            "RuleName": "Cruddur",
            "RuleARN": "arn:aws:xray:us-east-1:579018833036:sampling-rule/Cruddur",
            "ResourceARN": "*",
            "Priority": 9000,
            "FixedRate": 0.1,
            "ReservoirSize": 5,
            "ServiceName": "backend-flask",
            "ServiceType": "*",
            "Host": "*",
            "HTTPMethod": "*",
            "URLPath": "*",
            "Version": 1,
            "Attributes": {}
        },
        "CreatedAt": "2023-03-04T15:57:13+00:00",
        "ModifiedAt": "2023-03-04T15:57:13+00:00"
    }
}
```

## CloudWatch

Commented out the CW logger to prevent constant logging which adds up costs.

## Rollbar
