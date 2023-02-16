import http from 'node:http'
import { env } from './env'
import { app } from './app'

http
  .createServer(app.callback())
  .listen(env.PORT, () => {
    console.log(`Listening at ${env.PORT}`)
  })