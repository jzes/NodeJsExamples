const express = require('express')
// const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const passportLocal = require('passport-local')

// create local Strategy
var estrategia = new passportLocal.Strategy(function (username, password, done) {
  if (username === password) {
    done(null, {id: username, name: username})
  } else {
    done(null, null)
  }
})
// create app
var app = express()

// configure app
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(session({secret: 'chavesecreta',
         resave: false,
         saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())

// configure estrategia
passport.use(estrategia)

// serializadores
passport.serializeUser(function (user, done) {
  done(null, user.id)
})
passport.deserializeUser(function (id, done) {
  done(null, {id: id, name: id})
})

// routes
app.get('/', function (req, res) {
  var responseObj = {isAuth: req.isAuthenticated(),
             user: req.user}
  res.render('index', responseObj)
})

app.get('/login', function (req, res) {
  res.render('login')
})
app.post('/login', passport.authenticate('local'), function (req, res) {
  res.redirect('/')
})

// run server
app.listen(3000, function () {
  console.log('server up on 3000')
})
