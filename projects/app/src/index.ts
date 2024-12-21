import { Hono } from 'hono'

const app = new Hono()
const routes = app.get('/foo', (c) => c.json({ bar: 'bazz' }))

export type AppType = typeof routes

export default app
