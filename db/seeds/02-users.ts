import Knex from 'knex'
import { LoremIpsum } from 'lorem-ipsum'

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1')
  const users = []
  const lorem = new LoremIpsum()

  for (let index = 0; index < 10000; index++) {
    const name = lorem.generateWords(1)
    const surname = lorem.generateWords(2)
    users.push({ name, surname })
  }
  // Inserts seed entries
  await knex('users').insert(users)
}
