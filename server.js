import 'dotenv/config/js'
import express from 'express'

//import database
import ('./config/database.js')

//setup app
const app = express()

//import routes
import {router as pokemonRouter} from './routes/pokemon.js'

//setup middleware
app.use(express.json())

//mount routers
app.use('/pokemon', pokemonRouter)


//setup server
const PORT = process.env.PORT || 6001
app.listen(PORT, () => console.log(`server listening on port ${PORT}`))