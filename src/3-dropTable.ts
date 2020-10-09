import { SchemaBuilder } from 'knex'
import { create, ProviderData } from './data-provider/index'
import { down } from './db/migration'

create()
  .then((dbConnection:ProviderData) => down(dbConnection.postgres)
    .then((val:SchemaBuilder) => console.log(val)))
