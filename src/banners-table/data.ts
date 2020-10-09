import { QueryBuilder } from 'knex'
import { Database } from '../db/config'
import { Banner, BannerInsert } from './interfaces'
import { ProviderData } from '../data-provider/index'

export const getBanner = (banners: () => QueryBuilder) => async (id:number):Promise<Banner[]> => {
  return await banners().where('id', id).select()
}

export const getBannerList = (banners: () => QueryBuilder) => async ():Promise<Banner[]> => {
  return await banners().select()
}

export const createBanner = (banners: () => QueryBuilder) => async (banner: BannerInsert):Promise<Banner> => {
  const result = (await banners().insert(banner, ['id']) as [{id: string}])[0]
  return (await banners().select().where({ id: result.id }) as Banner[])[0]
}

export interface Data {
  get: ReturnType<typeof getBanner>,
  getList: ReturnType<typeof getBannerList>,
  create: ReturnType<typeof createBanner>
}

export const create = async (data: ProviderData):Promise<Data> => {
  const QBbanners = () => data.postgres.withSchema(Database.schema).table('banners')

  return {
    get: getBanner(QBbanners),
    getList: getBannerList(QBbanners),
    create: createBanner(QBbanners)
  }
}

export default { create }
