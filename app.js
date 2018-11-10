'use strict'

const express = require('express')
const compression = require('compression')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')


require('dotenv').config()

const index = require('./routes/index')
const admin = require('./routes/admin')
const mensaje = require('./routes/mensaje')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser(process.env.SESSION_SECRET))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(express.static(path.join(__dirname, 'public')))

require('./config/passport')(passport) //passport config file
//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.get('*', (req, res, next) => {
  res.locals.user = req.user || null
  next()
})

//aqui los routes
app.use('/', index)
app.use('/admin', admin)
app.use('/mensaje', mensaje)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app