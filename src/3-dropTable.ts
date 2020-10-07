import Knex, { SchemaBuilder } from 'knex'
import { connect } from './db/db'
import { BannersTable } from './banners/bannerController'

connect()
  .then((dbConnection:Knex) => BannersTable.down(dbConnection)
    .then((val:SchemaBuilder) => console.log(val)))
