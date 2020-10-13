import { QueryBuilder } from 'knex'
import { SCHEMA } from '../../../../knexfile'
import { Banner, BannerInsert } from './interfaces'
import { ProviderData } from '../../../data-provider/index'

const getBanner = (banners: () => QueryBuilder) => async (id:number):Promise<Banner[]> => {
  return await banners().select().where('id', id)
}

const getBannerList = (banners: () => QueryBuilder) => async ():Promise<Banner[]> => {
  return await banners().select()
}

const createBanner = (banners: () => QueryBuilder) => async (banner: BannerInsert):Promise<Banner> => {
  const idOfInsertedBanner = (await banners().insert(banner, ['id']) as [{id: string}])[0]
  return (await banners()
    .select()
    .where({ id: idOfInsertedBanner.id }) as Banner[])[0]
}

export interface IConnection {
  get: ReturnType<typeof getBanner>,
  getList: ReturnType<typeof getBannerList>,
  create: ReturnType<typeof createBanner>
}

export const createConnectionInterface = async (data: ProviderData):Promise<IConnection> => {
  const QBBanners = () => data.postgres.withSchema(SCHEMA).table('banners')

  return {
    get: getBanner(QBBanners),
    getList: getBannerList(QBBanners),
    create: createBanner(QBBanners)
  }
}

export default { createConnectionInterface }
