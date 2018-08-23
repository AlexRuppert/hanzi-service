import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import helmet from 'koa-helmet'
import mask from 'koa-json-mask'
import logger from 'koa-morgan'
import serve from 'koa-static'
import paths from './paths'
import cache from 'koa-rest-cache'

//configure all middlewares here
export default [
  //helmet(),
  cors(),
  logger('combined'),
  compress({ threshold: 256 }),
  conditional(),
  etag(),
  cache(),
  mask(),
  bodyParser(),
  serve(paths.public),
]
