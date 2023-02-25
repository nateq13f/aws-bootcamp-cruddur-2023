# Week 1 — App Containerization

## Homework



### Containers

- Added the Dynamo local, postgres, and there volumes to the docker-compose file so they exist.

### Troubleshooting steps taken ===

Enviornment variable issues are common at creation stage of conatiner building.

`app.py` = needed 2 more env variables 

```
export FRONTEND_URL="*"
export BACKEND_URL="*"
```

- Docker extension with the right-click options for `compose start` and `compose stop` is very helpful.
Docker exec command can actually be "ran" by right clicking the docker image on the docker extension list of images

OPEN another terminal to view running docker images with `docker ps` .. I was wondering how to do this since on VScode there is only 1 terminal by default and it really annoyed me.

### Personal Challenges::

Github error thrown::

`fatal: Need to specify how to reconcile divergent branches.`

fixed by using command: `git config --global pull.ff true`

- Could not get Postgres extension to connect, it was timing out. I was accidentally trying to open a MySQL DB instead of Postgres. Now it works.

- FORGOT to append the /api/activities/home to the gitpod link so I was getting same error as before.

