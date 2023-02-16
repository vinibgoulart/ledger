import http from 'node:http'
import mongoose from 'mongoose'
import { env } from './env'
import { app } from './app'

mongoose.set('strictQuery', true)

mongoose
  .connect(env.MONGO_URI)
  .then(() => {
    http
      .createServer(app.callback())
      .listen(env.PORT, () => {
        console.log(`Listening at ${env.PORT}`)
      })
  })
