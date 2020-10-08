import Knex from 'knex'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'

import { connect } from './db/db'
import { createRoot, createSchema } from './gql/gqlController'

const main = async () => {
  const app = express()
  const data:Knex = await connect()
  const schema = createSchema()
  const root = createRoot(data)

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
  app.listen(8888, () => console.log('Server is up on http://localhost:8888/graphql'))
}
main()
