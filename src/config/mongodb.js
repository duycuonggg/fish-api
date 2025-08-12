import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'

let fishDatabaseIntance = null

const mongoClientIntance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationError: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientIntance.connect()

  fishDatabaseIntance = mongoClientIntance.db(env.DATABASE_NAME)
}

export const CLOSE_DB = async () => {
  await mongoClientIntance.close()
}

export const GET_DB = () => {
  if (!fishDatabaseIntance) throw new Error ('Must connect to Database fisrt')
  return fishDatabaseIntance
}