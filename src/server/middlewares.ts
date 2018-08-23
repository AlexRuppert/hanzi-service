import cors from '@koa/cors'
import compress from 'koa-compress'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import mask from 'koa-json-mask'
import logger from 'koa-morgan'
import cache from 'koa-rest-cache'

//configure all middlewares here
export default [
  cors(),
  logger('combined'),
  compress({ threshold: 256 }),
  conditional(),
  etag(),
  cache(),
  mask(),
]
