A backend of application to manage banners
=====

## Technologies

- Typescript
- "Knex" for database access
- Postgres as database
- "Standard" for linting
- GraphQL as api

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
- [ ] install and configure linter
- [ ] setup project build
- [ ] establish connection to db using knex
- [ ] add GraphQL 
    - create banner
    - get banner by id
    - get all banners
- [ ] add Express
