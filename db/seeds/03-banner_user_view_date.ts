import Knex from 'knex'

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('banner_user_view_date').del()
  await knex.raw('ALTER SEQUENCE banner_user_view_date_id_seq RESTART WITH 1')

  const data = [
    { banner_id: '1', user_id: '1' },
    { banner_id: '2', user_id: '3' },
    { banner_id: '3', user_id: '2' },
    { banner_id: '2', user_id: '1' },
    { banner_id: '4', user_id: '2' }
  ]

  // Inserts seed entries
  await knex('banner_user_view_date').insert(data)
}
