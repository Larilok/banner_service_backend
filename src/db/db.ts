import Knex from 'knex'
import { Database } from './config'

export const connect = async (): Promise<Knex> => {
  return new Promise((resolve, reject) => {
    const knex = Knex({
      client: 'pg',
      connection: {
        host: Database.hostName,
        user: Database.userName,
        password: Database.password,
        database: Database.name
      }
    })
    knex.raw('SELECT current_timestamp')
      .then((res) => { console.log('Established connection with database'); resolve(knex) })
      .catch((err) => { reject(err) })
  })
}

// export const createTable = async (knex:Knex, name:String) => {
//   return new Promise ((resolve, reject) => {
//     const exists:boolean = knex.schema.hasTable('banners')
//     if(!exists){

//   }
// })
