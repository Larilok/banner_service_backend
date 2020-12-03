import redis from 'redis';

const HOST = 'redisdb.txgui8.0001.euc1.cache.amazonaws.com'
const PORT = 6379

const client = redis.createClient(PORT, HOST);

client.on('connect', () => {
  console.log('connected');
  writeRedisKey('myHighScore', '1000')
})

client.on('error', (error) => console.error(error))

function writeRedisKey(keyRedis:string, value:string) {
  client.set(keyRedis, value, (err, response) => {
    console.log(response);
    client.expire(keyRedis, 30);
    readRedisKey(keyRedis)
  })
}

function readRedisKey(keyRedis:string) {
  client.get(keyRedis, (err, res) => {
    console.log(res)
  })
}