import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'

import BannersTable from '../db/tables/banners/connection-interface'

export const createSchema: BS.createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

export const createRoot: BS.createRoot = async () => {
  const connInterface = await BannersTable.createConnectionInterface()
  return {
    banner: async ({ id }:IBanner) => {
      const bannersById = await connInterface.get(id)
      return bannersById[0]
    },
    banners: async () => {
      return await connInterface.getList()
    },
    addBanner: async ({ banner }:IAddBanner) => {
      return await connInterface.create(banner)
    }
  }
}
