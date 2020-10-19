import { QueryBuilder } from 'knex'
import { SCHEMA } from '../../../../knexfile'
import { BannerReturn, BannerInsert } from './interfaces'
import knex from './knex'

const getBanner = (banners: () => QueryBuilder) => async (id:number):Promise<BannerReturn[]> => {
  return await banners().select().where('id', id)
}

const getBannerList = (banners: () => QueryBuilder) => async ():Promise<BannerReturn[]> => {
  return await banners().select()
}

const createBanner = (banners: () => QueryBuilder) => async (banner: BannerInsert):Promise<BannerReturn> => {
  const idOfInsertedBanner = (await banners().insert(banner, ['id']) as [{id: string}])[0]
  return (await banners()
    .select()
    .where({ id: idOfInsertedBanner.id }) as BannerReturn[])[0]
}

export interface IConnection {
  get: ReturnType<typeof getBanner>,
  getList: ReturnType<typeof getBannerList>,
  create: ReturnType<typeof createBanner>
}

export const createConnectionInterface = async ():Promise<IConnection> => {
  return {
    get: getBanner(QBBanners),
    getList: getBannerList(QBBanners),
    create: createBanner(QBBanners)
  }
}

export default { createConnectionInterface }
