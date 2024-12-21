import { AppType } from 'app'
import { hc } from 'hono/client'

const client = hc<AppType>('/')
