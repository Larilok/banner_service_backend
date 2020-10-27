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

-- spare time
how to optimize a query:                               (4h -)
 - watch lecture about query optimization              (2h -)
 - practice                                            (30m -)

explain a compl task

- natural join                                        (30m -)
- first task rewrite                                  (20m -)
- arguments (on delete, on update)                    (20m -)
- diff '==' and '==='                                 (10m -)
- function (apply, caller, bind)                      (15m -)
- typescript files for type delc                      (30m -)
- lodash(funcs desc, modules)                         (1h -)
- duck typing protect value(защитники типов)          (30m -)
- generics: ternary operator, restricted by enum      ()
- refactor the structure of the project
- metadata in Reflect, what for?
---

## Theory
