import Knex from 'knex'
import postgres from './postgres'

export interface ProviderData {
  postgres: Knex
}

export const create = async ():Promise<ProviderData> => {
  return { postgres: await postgres.connect() }
}

export default { create }
