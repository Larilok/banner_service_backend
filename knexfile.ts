// Update with your config settings.
import dotenv from 'dotenv'
dotenv.config()

export const { CLIENT, DATABASE, USERNAME, PASSWORD, HOSTNAME, SCHEMA } = process.env

export default {
  client: CLIENT,
  connection: {
    schema: SCHEMA,
    host: HOSTNAME,
    database: DATABASE,
    user: USERNAME,
    password: PASSWORD
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
}
