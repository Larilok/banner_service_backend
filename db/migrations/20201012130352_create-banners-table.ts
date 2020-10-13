import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  const exists = await knex.schema.hasTable('banners')
  if (!exists) {
    await knex.schema.createTable('banners', (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('text').notNullable()
      table.string('pictureUrl').notNullable()
      table.timestamp('startDate')
      table.timestamp('endDate')
      table.boolean('isActive').defaultTo(false)
      table.timestamps(false, true)
    })
  }
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists('banners')
}
