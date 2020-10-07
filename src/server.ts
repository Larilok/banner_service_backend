import Knex from 'knex'
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList, GraphQLNonNull, GraphQLInt, GraphQLBoolean
} from 'graphql'

import { connect } from './db/db'
import { BannersTable } from './banners/bannerController'
import { BannerInsert } from './banners/bannersData'

const app = express()

const BannerReturnType = new GraphQLObjectType({
  name: 'BannerReturn',
  description: 'A banner to return from a database',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    pictureUrl: { type: GraphQLNonNull(GraphQLString) },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    isActive: { type: GraphQLBoolean },
    createdAt: { type: GraphQLNonNull(GraphQLString) },
    updatedAt: { type: GraphQLNonNull(GraphQLString) }
  })
})

const BannerInsertType = new GraphQLObjectType({
  name: 'BannerInsert',
  description: 'A banner to insert into a database',
  fields: () => ({
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    pictureUrl: { type: GraphQLNonNull(GraphQLString) },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    isActive: { type: GraphQLBoolean }
  })
})

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    banner: {
      type: BannerReturnType,
      description: 'A banner by id',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (parent, args) => connect()
        .then((dbConnection:Knex) => BannersTable.getBanner(dbConnection, args.id)
          .then(banners => {
            return banners[0]
          }))
    },
    banners: {
      type: new GraphQLList(BannerReturnType),
      description: 'List of banners',
      resolve: () => connect()
        .then((dbConnection:Knex) => BannersTable.getBannerList(dbConnection)
          .then(bannersList => {
            return bannersList
          }))
    }

  })
})

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addBanner: {
      type: BannerInsertType,
      description: 'Add a banner',
      args: {
        title: { type: GraphQLString },
        text: { type: GraphQLString },
        pictureUrl: { type: GraphQLNonNull(GraphQLString) },
        startDate: { type: GraphQLString },
        endDate: { type: GraphQLString },
        isActive: { type: GraphQLBoolean }
      },
      resolve: (parent, args) => {
        const banner:BannerInsert = {
          title: args.title,
          text: args.text,
          pictureUrl: args.pictureUrl,
          isActive: args.isActive,
          startDate: args.startDate,
          endDate: args.endDate
        }
        connect()
          .then((dbConnection:Knex) => {
            BannersTable.createBanner(dbConnection, banner)
              .then((val) => { console.log(banner); console.log(val); return banner })
          })
      }
    }
  })
})

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(8888, () => console.log('Hi express'))
