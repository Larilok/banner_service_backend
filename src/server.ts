import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { createRoot, createSchema } from './gql/resolver'
const main = async () => {
  const app = express()
  const schema = createSchema()
  const root = await createRoot()
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  app.listen(8888, () => console.log('Server is up on http://localhost:8888/graphql'))
}
main()
