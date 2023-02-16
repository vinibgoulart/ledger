import mongoose from 'mongoose'
import { env } from './env'

export async function connectDatabase() {
  mongoose.set('strictQuery', true)

  return mongoose.connect(env.MONGO_URI)
}