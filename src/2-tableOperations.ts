// import { create, ProviderData } from './data-provider/index'
// import { BannersTable } from './banners-table/controller'

// const dummyData = ['a', 'b', 'c', 'd', 'e']

// create()
//   .then((dbConnection:ProviderData) => {
//     dummyData.forEach(val =>
//       BannersTable.createBanner(dbConnection, { pictureUrl: val })
//         .then(val => console.log(val)))
//   })
// // connect()
// //   .then((dbConnection:Knex) => BannersTable.getBannerList(dbConnection).then(val => {
// //     console.log('-----------BannersTable.getBannerList-------------')
// //     console.log(val)
// //   }))
// // connect()
// //   .then((dbConnection:Knex) => BannersTable.getBanner(dbConnection, 7)
// //     .then(val => console.log(val))
// //     .catch(err => console.log(err)))
