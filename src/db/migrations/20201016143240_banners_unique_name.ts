import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', function (table) {
    table.unique(['title'])
  })
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', table => {
    table.dropUnique(['title'])
  })
}
