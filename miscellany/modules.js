
var fs = require('fs')
var exports = module.exports = {}

// Simple function to add math operation
exports.add = function (numA, numB) {
  return numA + numB
}

// A "complex" object making use of constructor function
exports.People = function (name, age, likes) {
  this.name = name
  this.age = age
  this.likes = likes
  this.eat = function (whatEat) {
    if (whatEat === likes) {
      console.log(whatEat)
    } else {
      console.log('não gosto disso')
    }
  }
}

// A function to read a simple file and return an Promise
exports.readFile = function (path) {
  return new Promise(function (ok, rejected) {
    fs.readFile(path, 'utf-8', function (err, data) {
      if (err) {
        rejected(err)
      } else {
        ok(data)
      }
    })
  })
}
