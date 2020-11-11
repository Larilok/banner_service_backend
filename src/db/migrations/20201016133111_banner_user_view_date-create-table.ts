import Knex from 'knex'

export const up = async (knex: Knex): Promise<void> => {
  const exists = await knex.schema.hasTable('banner_view_date')
  if (!exists) {
    await knex.schema.createTable('banner_user_view_date', (table) => {
      table.increments('id')
      table.integer('banner_id')
        .notNullable()
        .references('id')
        .inTable('banners')
        .onDelete('cascade')
        .index()
      table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('cascade')
        .index()
      table.timestamp('seenAt')
        .defaultTo(knex.fn.now())
    })
  }
}

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists('banner_user_view_date')
}
