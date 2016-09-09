// Exemplos de como trabalhar com promisses
function soma (numA, numB) {
  return new Promise(function (ok, err) {
    if (numA === undefined || numB === undefined) {
      err('parametros invalidos')
    } else {
      ok(numA + numB)
    }
  })
}

soma(2).then(function (resultado) {
  console.log(resultado)
}).catch(function (erro) {
  console.error('Erro', erro)
})
