import Knex from 'knex'
import config from '../../knexfile'

export const connect = async ():Promise<Knex> => {
  return new Promise((resolve, reject) => {
    const knex = Knex(config.development)
    knex.raw('SELECT current_timestamp')
      .then((res) => { console.log('Established connection with database'); resolve(knex) })
      .catch((err) => { reject(err) })
  })
}

export default { connect }
