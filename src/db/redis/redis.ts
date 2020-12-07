
import { createNodeRedisClient } from 'handy-redis'

const HOST = "test-redis.txgui8.0001.euc1.cache.amazonaws.com"
const PORT = 6379
const client = createNodeRedisClient(PORT, HOST)
client.nodeRedis.on('connect', () => {
  console.log('connected');
})

client.nodeRedis.on('error', (error) => console.log(error))
export default client
