// Ler arquivo e retornar em uma Promise

var fs = require('fs')

function ler (caminho) {
  return new Promise(function (resolve, reject) {
    fs.readFile(caminho, 'utf-8', function (erro, data) {
      if (erro) reject(erro)
      resolve(data)
    })
  })
}

var prom = ler('/home/jzes/pgadmin.log')

prom.then(function (data) {
  console.log(data)
})

prom.catch(function (erro) {
  console.error(erro)
})
