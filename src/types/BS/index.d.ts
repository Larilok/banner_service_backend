import { GraphQLSchema } from 'graphql'

declare namespace BS {

  type createSchema = () => GraphQLSchema

  type createRoot = () => Promise<{
    banner: ({ id }: IBanner) => Promise<any>
    banners: () => Promise<any[]>
    addBanner: ({ banner }: BannerInsert) => Promise<any>
  }>

  interface BannerReturn {
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

  interface BannerInsert {
    title: string,
    text: string,
    pictureUrl: string,
    startDate?: Date,
    endDate?: Date,
    isActive?: boolean,
  }

  interface IBanner {
    id:number
  }

  interface IAddBanner {
    banner:BannerInsert
  }
}

export default BS
// values (let, const, and var), namespace, module, enum, class, import, function
// types: type, interface, class, enum, import
