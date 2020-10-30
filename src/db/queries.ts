import BS from 'BS'
import knex from './knex'

const getBanner = async (id:number):Promise<BS.BannerReturn[]> => {
  return await knex.table('banners').select().where('id', id)
}

const getBannerList = async ():Promise<BS.BannerReturn[]> => {
  return await knex.table('banners').select()
}

const createBanner = async (banner: BS.BannerInsert):Promise<BS.BannerReturn> => {
  const banners = () => knex.table('banners')
  const idOfInsertedBanner = (await banners().insert(banner, ['id']) as [{id: string}])[0]
  return (await banners()
    .select()
    .where({ id: idOfInsertedBanner.id }) as BS.BannerReturn[])[0]
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
