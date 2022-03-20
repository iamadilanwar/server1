const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
require('./helpers/init_redis')

const AuthRoute = require('./Routes/Auth.route')
const UserRoute = require('./Routes/User.route')
const CardRoute = require('./Routes/Card.route')
const SubCardsRoute = require('./Routes/SubCards.route')
const HistoryRoute = require('./Routes/History.route')
const MobileRoute = require('./Routes/Mobile.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/mobile', MobileRoute)
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/card', CardRoute)
app.use('/allSubCards', SubCardsRoute)
app.use('/history', HistoryRoute)


app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})
app.get('/', (req, res) => { res.send('Hello World!') })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
