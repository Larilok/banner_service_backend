import { ProviderData } from '../data-provider'
import { Banner, BannerInsert } from './interfaces'
import BannerTableData, { Data } from './data'

export const getBanner = (banners: Data) => async (id:number):Promise<Banner[]> => {
  return banners.get(id)
}

export const getBannerList = (banners: Data) => async ():Promise<Banner[]> => {
  return banners.getList()
}

export const createBanner = (banners: Data) => async (banner: BannerInsert):Promise<Banner> => {
  return banners.create(banner)
}

export const create = async (data: ProviderData) => {
  const banners = await BannerTableData.create(data)

  return {
    get: getBanner(banners),
    getList: getBannerList(banners),
    create: createBanner(banners)
  }
}

export default { create }
