import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  const exists = await knex.schema.hasTable('users')
  if (!exists) {
    await knex.schema.createTable('users', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('surname').notNullable()
      table.timestamps(false, true)
    })
  }
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists('users')
}
