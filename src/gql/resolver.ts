import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'

import { BannerInsert } from '../db/tables/banners/interfaces'
import BannersTable from '../db/tables/banners/connection-interface'
import { ProviderData } from '../data-provider'

export const createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

interface IBanner {
  id:number
}
interface IAddBanner {
  banner:BannerInsert
}

export const createRoot = async (data:ProviderData) => {
  const connInterface = await BannersTable.createConnectionInterface(data)
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
