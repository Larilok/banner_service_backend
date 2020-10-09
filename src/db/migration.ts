import Knex, { SchemaBuilder } from 'knex'

export const up = async (knex:Knex):Promise<SchemaBuilder> => await knex.schema.createTable('banners', (table) => {
  table.increments('id')
  table.string('title')
  table.string('text')
  table.string('pictureUrl').notNullable()
  table.timestamp('startDate')
  table.timestamp('endDate')
  table.boolean('isActive').defaultTo(false)
  table.timestamps(false, true)
})

export const down = async (knex:Knex):Promise<SchemaBuilder> => await knex.schema.dropTable('banners')
