import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', table => {
    table.text('text').notNullable().alter()
  })
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.alterTable('banners', table => {
    table.string('text').notNullable().alter()
  })
}
