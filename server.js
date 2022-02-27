import 'dotenv/config.js'
import createError from 'http-errors'
import express from 'express'
import cors from 'cors'

//import database
import ('./config/database.js')

//setup app
const app = express()

//import routes
import {router as pokemonRouter} from './routes/pokemon.js'

//setup middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

//mount routers
app.use('/api/pokemon', pokemonRouter)

//setup server
const PORT = process.env.PORT || 6001

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

//error handler
app.use(function (err, req, res, next) {
  //send the error status and message
  res.status(err.status || 500).json({"err": err.message})
})