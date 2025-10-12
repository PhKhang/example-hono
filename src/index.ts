import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'

import banks from '../data/bank_list_update_mbv_1758784268922_41182.json' with { type: 'json' }

const app = new Hono()

app.get('/', (c) => {
  return c.text('Bank API is operational')
})

app.get('/health', (c) => {
  return c.json({ status: 'ok' })
})

app.get('/api/banks', (c) => {
  return c.json(banks)
})

serve({
  fetch: app.fetch,
  port: process.env.PORT ? Number(process.env.PORT) : 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
