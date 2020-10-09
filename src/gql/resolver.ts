import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'

import BannersTable from '../banners-table/controller'
import { Banner, BannerInsert } from '../banners-table/interfaces'
import { ProviderData } from '../data-provider/index'

export const createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

interface DataWithID {
  id:number
}

export const createRoot = (data:ProviderData) => {
  return {
    banner: async ({ id }:DataWithID) => {
      return (await (await BannersTable.create(data)).get(id))[0]
    },
    banners: async () => {
      return (await (await BannersTable.create(data)).getList())
    },
    addBanner: async ({ title, text, pictureUrl, isActive, startDate, endDate }:Banner) => {
      const banner:BannerInsert = {
        title: title,
        text: text,
        pictureUrl: pictureUrl,
        isActive: isActive,
        startDate: startDate,
        endDate: endDate
      }
      await (await BannersTable.create(data)).create(banner)
      return banner
    }
  }
}
