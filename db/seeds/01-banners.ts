import Knex from 'knex'
import { BannerInsert } from '../../src/db/tables/banners/interfaces'
import { LoremIpsum } from 'lorem-ipsum'

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('banners').del()
  await knex.raw('ALTER SEQUENCE banners_id_seq RESTART WITH 1')
  const banners:BannerInsert[] = []

  const lorem = new LoremIpsum()
  for (let index = 0; index < 1000; index++) {
    const title = lorem.generateWords(3) + index
    const text = lorem.generateWords(20)
    const pictureUrl = 'https://' + lorem.generateWords(2)
    banners.push({ title, text, pictureUrl })
  }

  // Inserts seed entries
  await knex('banners').insert(banners)
}
