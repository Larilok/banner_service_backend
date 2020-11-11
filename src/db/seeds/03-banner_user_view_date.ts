import Knex from 'knex'

function randomId (maxId: number) {
  return Math.ceil(Math.random() * maxId)
}

export const seed = async (knex: Knex): Promise<void> => {
  // Deletes ALL existing entries
  await knex('banner_user_view_date').del()
  await knex.raw('ALTER SEQUENCE banner_user_view_date_id_seq RESTART WITH 1')

  let data = []
  const startDate = new Date(2020, 9, 1)
  for (let index = 1; index <= 1000000; index++) {
    const bannerId = randomId(10000)
    const userId = randomId(10000)
    const seenAt = new Date(startDate)
    seenAt.setMinutes(index)
    data.push({ banner_id: bannerId, user_id: userId, seenAt: seenAt })
    if (index % 10000 === 0) {
      await knex('banner_user_view_date').insert(data)
      data = []
    }
  }
}
