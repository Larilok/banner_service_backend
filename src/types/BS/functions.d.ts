
declare namespace BS {
  type createSchema = () => GraphQLSchema

  type createRoot = () => Promise<{
    banner: ({ id }: any) => Promise<any>
    banners: () => Promise<any[]>
    addBanner: ({ banner }: any) => Promise<any>
  }>
}
