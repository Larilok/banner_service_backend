import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { createRoot, createSchema } from './gql/resolver'
import sls from 'serverless-http'

const app = express()
const main = async () => {
  const schema = createSchema()
  const root = await createRoot()
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
}
main()

module.exports.handler = sls(app)
