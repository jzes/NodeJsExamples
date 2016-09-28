
// função de soma que chama um callback no fim
function soma (numA, numB, callBack) {
  console.log('Function soma')
  callBack(numA + numB)
}

// utilizando a função de soma e passando uma função como parametro de callback
soma(1, 2, function (retorno) {
  console.log('callBack')
  console.log(retorno)
})
