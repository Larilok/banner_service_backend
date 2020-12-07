import { IRedisExpire, IRedisStringRecord } from '../../typing'
import redis from './redis'


const getString = async (key: string):Promise<string> => {
  return await redis.get(key)
}

const setKey = async (record: IRedisStringRecord):Promise<number> => {
  return await redis.setnx(record.key, record.value)
}

const deleteKey = async (key: string):Promise<number> => {
  return await redis.del(key)
}

const expireKey = async (redisExpire: IRedisExpire):Promise<number> => {
  return await redis.expire(redisExpire.key, redisExpire.seconds)
}


export interface IConnection {
  getString: typeof getString,
  deleteKey: typeof deleteKey,
  setKey: typeof setKey,
  expireKey: typeof expireKey
}

export const createQueriesInterface = async ():Promise<IConnection> => {
  return {
    deleteKey,
    getString,
    setKey,
    expireKey
  }
}

export default { createQueriesInterface }

