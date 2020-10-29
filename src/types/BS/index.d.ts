import { GraphQLSchema } from 'graphql'

declare type createSchema = () => GraphQLSchema

declare type createRoot = () => Promise<{
  banner: ({ id }: any) => Promise<any>
  banners: () => Promise<any[]>
  addBanner: ({ banner }: any) => Promise<any>
}>
declare interface BannerReturn {
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

declare interface BannerInsert {
  title: string,
  text: string,
  pictureUrl: string,
  startDate?: Date,
  endDate?: Date,
  isActive?: boolean,
}

declare interface IBanner {
  id:number
}

declare interface IAddBanner {
  banner:BannerInsert
}
// values (let, const, and var), namespace(only types inside), module, enum, class, import, function
// types: type, interface, class, enum, import
