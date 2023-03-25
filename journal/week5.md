# Week 5 — DynamoDB and Serverless Caching

## Work -

- Made `ddb.py` file for dynamo logic, like the PostGres `db.py` file
- Created script `list-users` that grabs and displays the cognito users
- Added authorization header to frontend pages so it gets passed correctly (MessageGroups.js, MessageGroup.js, HomeFeedPage.js, MessageForm.js)

### Issues


CREATE , load, and seed REGULAR DB first, and then the ddb scripts will run because they rely on the 
Regular DB attributes.
