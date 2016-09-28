var fileSystem = require('fs')

fileSystem.readFile('/home/z/testeFile', 'utf-8', function (erro, data) {
  console.log(data)
})
