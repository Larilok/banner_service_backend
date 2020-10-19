import Knex from 'knex'

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')

  const users = [
    { name: 'Михаил', surname: 'Маркелов' },
    { name: 'Сергей', surname: 'Зенков' },
    { name: 'gray', surname: 'gray' }
  ]

  // Inserts seed entries
  await knex('users').insert(users)
}
