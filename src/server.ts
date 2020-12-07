import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { createRoot, createSchema } from './gql/resolver'
import sls from 'serverless-http'
import { bodyParserGraphQL } from 'body-parser-graphql'

const app = express()
const main = async () => {
  const schema = createSchema()
  const root = await createRoot()
  app.use(bodyParserGraphQL()) // to correctly parse the body
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
  }))
}
main()

const handler = sls(app)
export { handler }
