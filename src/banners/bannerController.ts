import Knex, { SchemaBuilder } from 'knex'
import { Banner, BannerInsert } from './bannersData'

export namespace BannersTable {
  export const getBanner = async (knex:Knex, id:number):Promise<Banner[]> => {
    return await knex.where('id', id).select().table('banners')
  }

  export const getBannerList = async (knex:Knex):Promise<Banner[]> => {
    return await knex.select().table('banners')
  }

  export const createBanner = async (knex:Knex, banner: BannerInsert):Promise<Banner> => {
    const result = (await knex('banners').insert(banner, ['id']) as [{id: string}])[0]
    return (await knex('banners').select().where({ id: result.id }) as Banner[])[0]
  }

  export const up = async (knex:Knex):Promise<SchemaBuilder> => await knex.schema.createTable('banners', (table) => {
    table.increments('id')
    table.string('title', 255)
    table.string('text', 255)
    table.string('pictureUrl', 255).notNullable()
    table.timestamp('startDate')
    table.timestamp('endDate')
    table.boolean('isActive').defaultTo(false)
    table.timestamps(false, true)
  })

  export const down = async (knex:Knex):Promise<SchemaBuilder> => await knex.schema.dropTable('banners')
}
