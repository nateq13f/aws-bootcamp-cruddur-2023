# Week 11 — CloudFormation Part 2

## Networking

Added all other services required in CloudFormation (ALB, Fargate cluster).

### Stacks and their purpose:

- Cluster

Establishes the following:

1. Fargate Cluster
2. ALB
3. HTTPS Listener
4. HTTP Listener
5. Api ALB Listener Rule
6. ALB SG
7. Backend Target group
8. Frontend Target group

- Networking

Establishes the following:

VPC
IGW and attaches it
RouteTable and routes
All subnets (public and private)

    - Networking stack outputs (to use in other stacks) ::

1. VPC
2. VpcCidrBlock
3. SubnetCidrBlocks
4. SubnetIds
5. AvailabilityZones

- Service


Deleted all resources from AWS environment to make room and avoid conflicts from the CloudFormation template::

- ECS services,
- load balancer and target groups,
- Cloud maps namespace





## Toml setup

from /aws-bootcamp-cruddur-2023/
` gem install cfn-toml`
