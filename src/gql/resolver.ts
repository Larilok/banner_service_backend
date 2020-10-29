import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'

import * as BS from 'BS'

import BannersTable from '../db/queries'

export const createSchema: BS.createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

export const createRoot: BS.createRoot = async () => {
  const queriesInterface = await BannersTable.createQueriesInterface()
  return {
    banner: async ({ id }: BS.IBanner) => {
      const bannersById = await queriesInterface.getBanner(id)
      return bannersById[0]
    },
    banners: async () => {
      return await queriesInterface.getBannerList()
    },
    addBanner: async ({ banner }: BS.IAddBanner) => {
      return await queriesInterface.createBanner(banner)
    }
  }
}
