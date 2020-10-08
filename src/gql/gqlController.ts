import Knex from 'knex'
import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'

import { BannersTable } from '../banners/bannerController'
import { Banner, BannerInsert } from '../banners/bannersData'

export const createSchema = () => buildSchema(readFileSync('./src/schema.graphql').toString())

interface DataWithID {
  id:number
}

export const createRoot = (data:Knex) => {
  return {
    banner: async ({ id }:DataWithID) => {
      return (await BannersTable.getBanner(data, id))[0]
    },
    banners: async () => {
      return await BannersTable.getBannerList(data)
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
      await BannersTable.createBanner(data, banner)
      return banner
    }
  }
}
