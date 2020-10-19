import Knex from 'knex'
import { BannerInsert } from '../../src/db/tables/banners/interfaces'

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('banners').del()
  await knex.raw('ALTER SEQUENCE banners_id_seq RESTART WITH 1')

  const banners:BannerInsert[] = [
    { title: 'a', text: 'aaa', pictureUrl: 'http://a.com' },
    { title: 'b', text: 'bbb', pictureUrl: 'http://b.com' },
    { title: 'c', text: 'ccc', pictureUrl: 'http://c.com' },
    { title: 'd', text: 'ddd', pictureUrl: 'http://d.com' },
    { title: 'e', text: 'eee', pictureUrl: 'http://e.com' }
  ]

  // Inserts seed entries
  await knex('banners').insert(banners)
}
