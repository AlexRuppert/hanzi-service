import cors from '@koa/cors'
import compress from 'koa-compress'
import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import logger from 'koa-morgan'
import cache from 'koa-rest-cache'
import serve from 'koa-static-server'
import path from 'path'
//configure all middlewares here
console.log(path.resolve(__dirname + '../../../public'))
export default [
  cors(),
  logger('combined'),
  compress({ threshold: 256 }),
  conditional(),
  etag(),
  cache(),
  async function(ctx, next) {
    await next()
    if (ctx.url.toLowerCase().indexOf('.well-known') >= 0) ctx.type = 'text/plain'
  },

  serve({
    rootDir: 'public/.well-known',
    rootPath: '/.well-known',
  }),
]
