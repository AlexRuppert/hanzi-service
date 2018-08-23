import Koa from 'koa'
import mount from 'koa-mount'
import Router from 'koa-router'

import path from 'path'
import pino from 'pino'

import middlewares from './middlewares'
import paths from './paths'
import { JobManager, IJob } from './job-manager'

/**
 * A simple controller
 *
 * @interface IController
 */
interface IController {
  name: string
  app: Koa
}

const globalLogger = pino()

const globalJobManager = new JobManager()

/**
 * Main orchestration class
 *
 * @export
 * @class Server
 */
export default class Server {
  private _server: Koa
  /**
   *Creates an instance of Server.
   * @param {Array<any>} mounts
   * @param {number} [port=5001]
   * @memberof Server
   */
  constructor(mounts: Array<any>, jobs: IJob[], port: number = 5001) {
    this._server = new Koa()

    //load middlewares
    middlewares.concat(mounts.map(m => mount(m.name, m.app))).forEach(m => this._server.use(m))
    Server.jobManager.addJobs(jobs)
    //start server
    this._server.listen(port)

    Server.logger.info(`Server running on port ${port}`)
  }
  /**
   * Creates a new controller
   *
   * @static
   * @param {string} name the path to the controller
   * @param {(router: Router, db: low.LowdbAsync<any>) => void} routing the routing actions
   * @param {string} [dbName='db'] the name of the database file
   * @returns {Promise<IController>}
   * @memberof Server
   */
  public static async newController(
    name: string,
    routing: (router: Router) => void,
    dbName: string = 'db',
  ): Promise<IController> {
    
    const app = new Koa()
    const router = new Router()
    router.use(Server.mergeParams)

    routing(router)
    app.use(router.routes())
    app.use(router.allowedMethods())

    return new Promise<IController>(resolve => {
      resolve({
        name,
        app,
      })
    })
  }
  /**
   * Custom middleware: merges query and body parameters into path parameters object (params)
   *
   * @private
   * @static
   * @param {Router.IRouterContext} ctx
   * @param {() => Promise<any>} next
   * @memberof Server
   */
  private static async mergeParams(ctx: Router.IRouterContext, next: () => Promise<any>) {
    if (typeof ctx.request.query === 'object') {
      for (const key in ctx.request.query) {
        ctx.params[key] = ctx.request.query[key]
      }
    }
    if (typeof ctx.request.body === 'object') {
      for (const key in ctx.request.body) {
        ctx.params[key] = ctx.request.body[key]
      }
    }
    await next()
  }
  /**
   * Gets the name of a file from the file path without any extension
   *
   * @static
   * @param {string} filePath
   * @returns
   * @memberof Server
   */
  public static getFileName(filePath: string) {
    return path.basename(filePath).replace(path.extname(filePath), '')
  }
  /**
   * Returns a logger
   *
   * @readonly
   * @static
   * @type {pino.Logger}
   * @memberof Server
   */
  public static get logger(): pino.Logger {
    return globalLogger
  }
  public static get jobManager(): JobManager {
    return globalJobManager
  }
}
