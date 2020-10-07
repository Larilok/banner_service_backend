import Knex, { SchemaBuilder } from 'knex'
import { connect } from './db/db'
import { BannersTable } from './banners/bannerController'

connect()
  .then((dbConnection:Knex) => BannersTable.up(dbConnection)
    .then((val:SchemaBuilder) => console.log(val)))

// const main = async () => {
//   const knex:Knex = await connect()
//   const BannersTable.up(knex)
//     .then(val => console.log(val))
// }
// main()
