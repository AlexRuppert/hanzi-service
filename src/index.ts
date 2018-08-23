import Server from './server/server'
import dotenv from 'dotenv'
import apis from './api'
import jobs from './jobs'
//read config
dotenv.config()
//start server with configured port or default
let main
;(async () => {
  main = new Server(await apis, jobs, +process.env.PORT || undefined)
})()
