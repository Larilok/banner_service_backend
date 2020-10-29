import { BannerReturn, BannerInsert } from 'BS'
import knex from './knex'

const getBanner = async (id:number):Promise<BannerReturn[]> => {
  return await knex.table('banners').select().where('id', id)
}

const getBannerList = async ():Promise<BannerReturn[]> => {
  return await knex.table('banners').select()
}

const createBanner = async (banner: BannerInsert):Promise<BannerReturn> => {
  const banners = () => knex.table('banners')
  const idOfInsertedBanner = (await banners().insert(banner, ['id']) as [{id: string}])[0]
  return (await banners()
    .select()
    .where({ id: idOfInsertedBanner.id }) as BannerReturn[])[0]
}

export interface IConnection {
  getBanner: typeof getBanner,
  getBannerList: typeof getBannerList,
  createBanner: typeof createBanner
}

export const createQueriesInterface = async ():Promise<IConnection> => {
  return {
    getBanner,
    getBannerList,
    createBanner
  }
}

export default { createQueriesInterface }
