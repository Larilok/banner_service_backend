import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'
import BannersTable from '../db/queries'
import type { IBanner, IAddBanner } from '../typing'

export const createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

export const createRoot = async () => {
  const queriesInterface = await BannersTable.createQueriesInterface()
  return {
    banner: async ({ id }: IBanner) => {
      const bannersById = await queriesInterface.getBanner(id)
      return bannersById[0]
    },
    banners: async () => {
      return await queriesInterface.getBannerList()
    },
    addBanner: async ({ banner }: IAddBanner) => {
      return await queriesInterface.createBanner(banner)
    }
  }
}
