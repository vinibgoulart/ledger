import { config } from 'dotenv'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  PORT: z.number({ coerce: true })
})

if(process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test'
  })
} else {
  config()
}

const _env = envSchema.safeParse(process.env)

if(!_env.success) {
  console.error('Invalid environment variables!', _env.error.format())
  process.exit(1)
}

export const env = _env.data
