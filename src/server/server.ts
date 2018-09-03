import Koa from 'koa'
import mount from 'koa-mount'
import Router from 'koa-router'
import pino from 'pino'
import middlewares from './middlewares'
import http2 from 'http2'
import fs from 'fs'
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
  constructor(mounts: Array<any>, port: number = 5001) {
    this._server = new Koa()

    //load middlewares
    middlewares.concat(mounts.map(m => mount(m.name, m.app))).forEach(m => this._server.use(m))
    //start server
    //this._server.listen(port)
    const options =
      process.env.NODE_ENV === 'development'
        ? {
            key: fs.readFileSync('local certificates/localhost.key'),
            cert: fs.readFileSync('local certificates/localhost.cert'),
          }
        : {
            key: fs.readFileSync('certificates/domain-key.txt'),
            cert: fs.readFileSync('certificates/domain-crt.txt'),
          }

    http2.createSecureServer(options, this._server.callback()).listen(port)
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
  ): Promise<IController> {
    const app = new Koa()
    const router = new Router()

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
}
