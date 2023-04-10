# Week 7 — Solving CORS with a Load Balancer and Custom Domain

## Getting X-ray up and running

- Created ruby script `generate-env` for variables for using X-ray

### Docker networking
- Create cruddur net on docker locally
`docker network create cruddur-net`

- `docker network list` to see current docker networks
- `docker network inspect cruddur-net` to list all services that the docker network cruddur-net is associated with 


- Added new network to ALL services in `docker-compose.yml` file
```
    networks:
      - cruddur-net
```

- Created `bin/busybox` file to use it as a test image to `ping` or `telnet` other services to test network connectivity

### Timezone fixes

Fixing timezone issue -
for files -
`seed.sql`
`ddb.py`
`MessageItem.js`
`MessageGroupItem.js`
Created file `DateTimeFormat.js`