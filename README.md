A backend of application to manage banners
=====
## Technologies

- Typescript
- "Knex" for database access
- Postgres as database
- GraphQL as api
----

## How to use
Prereq: git, nodejs, npm, postman installed
1. Clone this repo `git clone https://github.com/Larilok/banner_service_backend.git`
2. Move to the root of the project
3. Run `npm install --production` 
4. Ask `michaelmarkelovv@gmail.com` for `.env` file and add place this file to the root of the project
5. Run `npm start`
6. Open postman
7. Create a new POST request
8. Type address `http://localhost:8888/graphql`
9. Open "BODY" subpage and mark "GraphQL"
10. 
Type this code to insert a sample data into database
 ```
 mutation {
  addBanner(banner: {pictureUrl: "http", title: "http", text: "http"} ) {
    id
  }
}
```
then run this query to get all banners 'id' and 'pictureUrl' from the table
```
query {
  banners {
    id,
    pictureUrl
  }
}
```
or for a single banner by id
```
query {
    banner(id: 1) {
    id,
    pictureUrl
  }
}
```
you can provide fragments to simplify the request
```
fragment FBannerReturn on BannerReturn {
  id,
  title,
  text,
  pictureUrl
}

query {
  banners {
    id,
    pictureUrl
  }
}
```
How should the first code look like in Postman 
![image](https://user-images.githubusercontent.com/31710921/95856210-56d9c300-0d62-11eb-82be-ca01fbbdc700.png)
Expected result 

----

## To-do

- [x] deploy Postgres on-premise or in cloud
- [x] create db scheme in third normal form
    - id (primary key)
      title, varchar(256) *
      text, varc(256)
      pictureUrl, varchar(256)
      startDate, (date)
      endDate, (date) timestamp *
      isActive, (boolean)
      createdAt(default)
      updatedAt(def timestamp)

- [x] install and configure linter
- [x] setup project build
- [x] establish connection to db using knex
- [x] add GraphQL 
    - create banner
    - get banner by id
    - get all banners
- [x] add Express
- [x] migration to
  - add column
  - delete column
  - change type of column
- [x] seed to
  - fill test data.


- [x] users (id, name, surname, createdAt(default), updatedAt(def timestamp))
- [x]bannerViewed (id, bannerId, UserId, seenAt)
- [x]query to get data from all tables(today, who)
- [x] index on text
- [x] unique on name

- [x]indexes types and what are they for

- [x] create queries:                                        (3h 50m - 4h)
- views count of unique banner by user                 (10m -) -
- count how many unique user viewed a banner           (10m -)
- query: join 3 tables, order                          (10m -)
- query: select with max from 3 tables, order          (10m -)
- query: select having, group by, order, limit!        (30m -)
- performance optimization                             (1h 30m -)
- joins (left/right(outer), inner, cross, natural)     (1h 10m -) +
(from the start, in the middle)

[x] query plan:                                        (4h+3h - 4h+3h30m) 
 - watch lecture about query plan                      (1h 30m - 1h)
 - test indexes                                        (2h 30m -)
  - test each index(~10min for each)                   (50m -)
  - test when query uses index and when not            (1h 40m -)

-- [x] spare time
how to optimize a query:                               (4h - 2h)
 - watch lecture about query optimization              (2h -)
 - practice                                            (30m -)

explain a compl task

- [x] natural join                                        (30m - 30m)
- [x] first task rewrite                                  (20m - 15m)
- [x] arguments (on delete, on update)                    (20m - 25m)
- [x] diff '==' and '==='                                 (10m - 30m)
- [x] function (apply, caller, bind)                      (15m - 40m)
- [x] lodash(funcs desc, modules)                         (1h - 30m)
- [x] typescript files for type delc + create d.ts        (30m - ) +50m +4h +50m
- [x] dependency injection(none, commonJs, amd, ES6)      (30m - 30m)
- [x] decl func in .d.ts and implement in .ts file        (15m - 15m)
- [x] SOL(I!)D                                            (30m - 1h 30m)
- [x] type and interface !diff                            (20m - 20m)
custom data type and type pseudonym
- [x] duck typing protect value(защитники типов)          (30m - 1h 20m)
- [x] generics: ternary operator, restricted by enum      (1h 30m - 2h)
- [x] types import js in browser(deffer, async)           (10m - 10m)
- [x] metadata in Reflect, what for?                      (50m - 1h 30m)
- [x] standard design patterns (банда 4 GoF)               (3h -) +9h
  - creational                                            (4h+1h30m - 4h+2h) 
  - structural                                            (4h+20m - 4h+30m) 
  - behavioral                                            (4h+ 1h20m - 4h+3h) 
    - Template Method
    - State
    - Mediator
    - Chain of Responsibility

---------------------------------------------------------------------------------
- [x] What is Serverless and how to setup                     (4h - 12h)
  - [x] how long will it be up?                               (30m -)
  <!-- timeout in Function settings up to 15 min -->
- [x] deploy current project and access via curl              (1h - 3h)
- [x] deploy new AWS Lambda: scheduler(every 10 min) => hello (1h - 1h)
- [x] serverless function events                              (2h - 4h)+2h
  (!kinesis & dynamodb
   !alexa skill
   !alexa smart home
   !iot) 
- [] refactor the structure of the project                    (30m - 25m+1h)



- [x] WebSocket what for?                                 (40m - 30m)
- [x] SNS, SQS examples                                   (40m - 1h20m)
- [x] Load balancers in AWS(how to determine when to branch,
 examples)                                                (40m - 1h40m)
- [x] CloudWatch                                          !(40m - 20m+2h20m)
- [x] Amazon Cognito                                      !(1h30m -3h)
- [x] EventBridge AWS                                     !(2h -2h)

- [x] CDN(cloudFront)                                     (1h40m - 1h40m)
- [x] aws lambda(event, context, callback)                (30m - 30m + 1h30m)
- [x] CloudWatch deep dive(metrics source)                (40m - 1h20m)

- [x] Lambda service desc(duration, amount, cost)             (1h30m - )
  vs kuber cluster

- [x] antipatterns                                            (6h - )
  - Cut-And-Paste Programming
  - The God Object
  
- [x] S3 buckets                                          (2h - 2h30m)

- [x] pricing and params of S3 bucket type                 (30m - 1h)
- [x] logs request costs, CWDashboard costs                   (1h - 1h30m)
- [x] upload file to S3                                      (1h - 1h)
  - through AWS Lambda                                   (1h - 3h)
- [x] CORS with example                                       (1h30m - 2h)
- [x] mixins and inheritance                                  (1h30m - 2h)

- GRASP                                                           (4h - 1h+4h)
  - LowCoupling and HighCohesion
- [x] DRY||DIE                                                    (30m - 15m)
- [x] KISS                                                        (30m - 20m)
- [x] YAGNI                                                       (30m - 15m)

- description of SQL and NoSQL                                (30m - )
- Redis(theory, use cases)                                    (3h)
  (endpoints)
  - add info to redis                                         (2h)
  - extract from redis
  
- sharding(Multi-AZ)
  Sharding is a method of splitting and storing a single logical dataset in multiple databases.
  A database can be split vertically — storing different tables & columns in a separate database, or horizontally — storing rows of a same table in multiple database nodes.

  Amazon ElastiCache supports locating all of a cluster's nodes in a single or multiple Availability Zones (AZs). Further, if you elect to locate your nodes in multiple AZs (recommended), ElastiCache enables you to either choose the AZ for each node, or allow ElastiCache to choose them for you.

  By locating the nodes in different AZs, you eliminate the chance that a failure, such as a power outage, in one AZ will cause your entire system to fail. Testing has demonstrated that there is no significant latency difference between locating all nodes in one AZ or spreading them across multiple AZs.

  You can specify an AZ for each node when you create a cluster or by adding nodes when you modify an existing cluster.

- commands to work with data in redis

- [x] upload to git
---------------------------------------------------------------------------------


- browserify
- CoR where appliable
- FineReadrer
---

## Theory
