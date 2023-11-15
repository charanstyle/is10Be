import express from 'express'
import * as db from './db/db.js'
import 'dotenv/config'

const app = express()

app.listen(process.env.PORT, () => {
  console.log(`app is listeing on the port ${process.env.PORT}`)
})
