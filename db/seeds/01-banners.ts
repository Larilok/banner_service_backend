import Knex from 'knex'
import { BannerInsert } from '../../src/db/tables/banners/interfaces'
import { LoremIpsum } from 'lorem-ipsum'

const randomDateAndHourInRange = (start:Date, end:Date, startHour:number, endHour:number) => {
  const startDateAsNumber = start.getTime()
  const endDateAsNumber = end.getTime()
  const diff = endDateAsNumber - startDateAsNumber
  const date = new Date(startDateAsNumber + Math.random() * diff)
  const hour = startHour + Math.random() * (endHour - startHour) | 0
  date.setHours(hour)
  return date
}

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('banners').del()
  await knex.raw('ALTER SEQUENCE banners_id_seq RESTART WITH 1')
  const banners:BannerInsert[] = []

  const lorem = new LoremIpsum()
  for (let index = 0; index < 10000; index++) {
    const title = lorem.generateWords(3) + index
    const text = lorem.generateWords(20)
    const pictureUrl = 'https://' + lorem.generateWords(2)
    const startDate = randomDateAndHourInRange(new Date(2020, 4, 1), new Date(2020, 5, 31), 0, 24)
    const endDate = randomDateAndHourInRange(new Date(2020, 9, 1), new Date(2020, 11, 31), 0, 24)
    const isActive = Math.round(Math.random()) as unknown as boolean
    banners.push({ title, text, pictureUrl, startDate, endDate, isActive })
  }

  // Inserts seed entries
  await knex('banners').insert(banners)
}
