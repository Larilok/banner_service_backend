A backend of application to manage banners
=====

## Technologies

- Typescript
- "Knex" for database access
- Postgres as database
- GraphQL as api
----

## How to use

1. Clone this repo `https://github.com/Larilok/banner_service_backend.git`
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
or for a single banner
```
query {
    banner(id: 1) {
    id,
    pictureUrl
  }
}
```
u can provide fragments to simplify the request
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


- migration to
  - add column
  - delete column
  - change type of column
- seed to
  - fill test data.

---

## Theory