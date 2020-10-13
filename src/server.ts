import express from 'express'
import { graphqlHTTP } from 'express-graphql'
// import BannersTable from './banners-table/connection-interface'

import DataProvider, { ProviderData } from './data-provider/index'
import { createRoot, createSchema } from './gql/resolver'

const main = async () => {
  const app = express()
  const data:ProviderData = await DataProvider.create()

  const schema = createSchema()
  const root = await createRoot(data)
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  app.listen(8888, () => console.log('Server is up on http://localhost:8888/graphql'))
}
main()
