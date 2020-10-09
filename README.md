A backend of application to manage banners
=====

## Technologies

- Typescript
- "Knex" for database access
- Postgres as database
- GraphQL as api
----

## How to use

1. Clone this repo
2. Move to the root of the project
3. Run `npm install --production` 
4. Run `npm start`
5. Open postman
6. Create a new POST request
7. Type address `http://localhost:8888/graphql`
8. Open "BODY" subpage and mark "GraphQL"
9. Type
 ```
 mutation {
  addBanner(pictureUrl: "http") {
    pictureUrl
  }
}
```
then
```
{
  banners {
    id,
    pictureUrl
  }
    banner(id: 1) {
    id
  }
}
```
Postman 
![image](https://user-images.githubusercontent.com/31710921/95579740-d869e200-0a3e-11eb-8a3a-537b07f246e8.png)

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

---------------------

- How to install{commands}
- How to deploy locally
- GraphQL query and mutation

- migration to add field and delete, change. Fill test data.