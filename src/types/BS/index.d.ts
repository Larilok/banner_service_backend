import { GraphQLSchema } from 'graphql'

export type createSchema = () => GraphQLSchema

export type createRoot = () => Promise<{
  banner: ({ id }: any) => Promise<any>
  banners: () => Promise<any[]>
  addBanner: ({ banner }: any) => Promise<any>
}>
export interface BannerReturn {
  id: number,
  title?: string,
  text?: string,
  pictureUrl: string,
  startDate?: string,
  endDate?: string,
  isActive?: boolean,
  createdAt: string,
  updatedAt: string
}

export interface BannerInsert {
  title: string,
  text: string,
  pictureUrl: string,
  startDate?: Date,
  endDate?: Date,
  isActive?: boolean,
}

export interface IBanner {
  id:number
}

export interface IAddBanner {
  banner:BannerInsert
}
// values (let, const, and var), namespace(only types inside), module, enum, class, import, function
// types: type, interface, class, enum, import
