var express = require('express')
var bodyParser = require('body-parser')
var app = express()

// userList-------------

var userList = [{userName: ''}]
// userList-------------

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index', {users: []})
})

app.post('/', function (req, res) {
  userList.push({userName: req.body.user})
  res.render('index', {users: userList})
})

app.listen(3000, function () {
  console.log('http://localhost:3000/')
})
