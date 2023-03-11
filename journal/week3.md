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


Modified `home_activities.py`

After much logging and troubleshooting, I got authenticated::

```
[2023-03-11 19:00:46,825] DEBUG in app: authenicated
[2023-03-11 19:00:46,825] DEBUG in app: {'sub': 'f41d29d1-74f4-44ea-bd17-f0e7251a41a3', 'iss': 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_YIsZZQ2ZU', 'client_id': '43g33jegd4tre25a7nip7ggohb', 'origin_jti': '60bb4261-7bdf-43bf-abfd-98b9cbfdc9f8', 'event_id': 'b8b944f8-0e3c-4f2b-acf7-382b9feeb327', 'token_use': 'access', 'scope': 'aws.cognito.signin.user.admin', 'auth_time': 1678558458, 'exp': 1678562058, 'iat': 1678558458, 'jti': '2ff8a71b-e15f-4ff9-9a9b-7c290a552263', 'username': 'f41d29d1-74f4-44ea-bd17-f0e7251a41a3'}
[2023-03-11 19:00:46,825] DEBUG in app: f41d29d1-74f4-44ea-bd17-f0e7251a41a3
192.168.195.11 - - [11/Mar/2023 19:00:46] "GET /api/activities/home HTTP/1.1" 200 -

```