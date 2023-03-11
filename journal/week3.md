# Week 3 — Decentralized Authentication

## Cognito


Added Cognito into app section in `app.py`
```
cognito_token_verification = CognitoTokenVerification(
  user_pool_id=os.getenv("AWS_COGNITO_USER_POOL_ID"),
  user_pool_client_id=os.getenv("AWS_COGNITO_USER_POOL_CLIENT_ID"),
  region=os.getenv("AWS_DEFAUL_REGION")
)

```