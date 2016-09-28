var fileSystem = require('fs')

var configReadStream = {encoding: 'utf-8', bufferSize: 128 * 1024}
var readStream = fileSystem.createReadStream('/home/z/testeFile', configReadStream)

readStream.on('data', function (data) {
  console.log(data)
})
