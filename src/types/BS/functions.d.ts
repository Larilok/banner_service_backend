import { GraphQLSchema } from 'graphql'

// declare namespace BS {
  export type createSchema = () => GraphQLSchema

  export type createRoot = () => Promise<{
    banner: ({ id }: any) => Promise<any>
    banners: () => Promise<any[]>
    addBanner: ({ banner }: any) => Promise<any>
  }>
// }
