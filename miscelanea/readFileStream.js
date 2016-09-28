
var fs = require('fs')
var readLine = require('readline')
var Stream = require('stream')

var inputStream = fs.createReadStream('/home/jzes/pgadmin.log')
var outputStream = new Stream()
var reader = readLine.createInterface(inputStream, outputStream)

reader.on('line', function (data) {
  console.log(data)
  console.log('---')
})

reader.on('close', function () {
  console.log('EOF')
})

// Referencia.: http://nomadev.com.br/como-ler-arquivos-grandes-com-node-js/
