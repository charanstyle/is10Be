import express from 'express'
import * as db from './db/db.js'
import 'dotenv/config'
import cors from 'cors'

import mountRoutes from './routes/routes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, () => {
  console.log(`app is listeing on the port ${process.env.PORT}`)
})

mountRoutes(app)
