import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.table('banners', table => {
    table.string('adUrl')
  })
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.table('banners', table => {
    table.dropColumn('adUrl')
  })
}
