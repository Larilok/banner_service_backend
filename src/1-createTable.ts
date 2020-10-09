import { SchemaBuilder } from 'knex'
import { create, ProviderData } from './data-provider/index'
import { up } from './db/migration'

create()
  .then((dbConnection:ProviderData) => up(dbConnection.postgres)
    .then((val:SchemaBuilder) => console.log(val)))

// const main = async () => {
//   const knex:Knex = await connect()
//   const BannersTable.up(knex)
//     .then(val => console.log(val))
// }
// main()
