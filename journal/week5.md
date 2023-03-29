# Week 5 — DynamoDB and Serverless Caching

## Work -

- Made `ddb.py` file for dynamo logic, like the PostGres `db.py` file
- Created script `list-users` that grabs and displays the cognito users
- Added authorization header to frontend pages so it gets passed correctly (MessageGroups.js, MessageGroup.js, HomeFeedPage.js, MessageForm.js)
- Created `CheckAuth.js` file in frontend
- Change `App.js` path to disaply the `message_group_uuid`   instead of handle
- Chaned the time to display more accurately with `year = str(datetime.datetime.now().year)`

### Issues


CREATE , load, and seed REGULAR DB first, and then the ddb scripts will run because they rely on the 
Regular DB attributes.

- BIG issues with getting my own custom created user into the local Postgres DB. Had to hardcode the uuid into the `seed` script. Then had a typo extra comma. Then `setup` finally worked and created my user with uuid.
