import { buildSchema } from 'graphql'
import { readFileSync } from 'fs'
import BannersTable from '../db/knex/queries'
import Redis from '../db/redis/queries'
import type { IBanner, IAddBanner } from '../typing'
import http, { IncomingMessage } from 'http'
const server = http.createServer((req: IncomingMessage, res) => {
  res.end();
})

export const createSchema = () => buildSchema(readFileSync('./schema.graphql').toString())

export const createRoot = async () => {
  const queriesInterface = await BannersTable.createQueriesInterface()
  const redisInterface = await Redis.createQueriesInterface()
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
    },
    getValue: async ({ key }: any) => {
      return await redisInterface.getString(key)
    },
    expireKey: async ({ expire }: any) => {
      console.log(expire)
      return await redisInterface.expireKey(expire)
    },
    deleteKey: async ({ key }: any) => {
      console.log(key)
      return await redisInterface.deleteKey(key)
    },
    setKey: async ({ record }: any) => {
      console.log(record)
      return await redisInterface.setKey(record)
    }


  }
}
