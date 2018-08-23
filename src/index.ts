import Server from './server/server'
import dotenv from 'dotenv'
import apis from './api'
//read config
dotenv.config()
//start server with configured port or default
let main
;(async () => {
  main = new Server(await apis, +process.env.PORT || undefined)
})()
