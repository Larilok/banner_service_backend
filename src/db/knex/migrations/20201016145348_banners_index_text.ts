import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', table => {
    table.index('text', 'GIN')
  })
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', table => {
    table.dropIndex('text')
  })
}
