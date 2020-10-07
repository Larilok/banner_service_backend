import Knex from 'knex'
import { connect } from './db/db'
import { BannersTable } from './banners/bannerController'

const dummyData = ['a', 'b', 'c', 'd', 'e']

connect()
  .then((dbConnection:Knex) => {
    dummyData.forEach(val =>
      BannersTable.createBanner(dbConnection, { pictureUrl: val })
        .then(val => console.log(val)))
  })
// connect()
//   .then((dbConnection:Knex) => BannersTable.getBannerList(dbConnection).then(val => {
//     console.log('-----------BannersTable.getBannerList-------------')
//     console.log(val)
//   }))
// connect()
//   .then((dbConnection:Knex) => BannersTable.getBanner(dbConnection, 7)
//     .then(val => console.log(val))
//     .catch(err => console.log(err)))
