import { createNodeRedisClient } from 'handy-redis'

const HOST = "test-redis.txgui8.0001.euc1.cache.amazonaws.com"
const PORT = 6379
const client = createNodeRedisClient(PORT, HOST)
client.nodeRedis.on('connect', () => {
  console.log('connected');
})

client.nodeRedis.on('error', (error) => console.log(error))

export async function handler(event: any, context: any) {
  const key = 'myHighScore'
  const value = '1000'
  try {
    await client.set(key, value)
    await client.expire(key, 30)
    await client.get(key)
  } catch (e) {
    console.log(e)
    return e
  }

  return 200
}
