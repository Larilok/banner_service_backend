// Update with your config settings.
// import dotenv from 'dotenv'
// dotenv.config()

// export const { CLIENT, DATABASE, USERNAME, PASSWORD, HOSTNAME, SCHEMA } = process.env

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.host,
    database: process.env.database,
    user: process.env.username,
    password: process.env.password
  },
  migrations: {
    directory: __dirname + './dist/db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: __dirname + './dist/db/seeds'
  },
  pool: {
    min: 1,
    max: 2 
  }
}
