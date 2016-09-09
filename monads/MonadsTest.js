// Teste simples para monads ou pelomenos eu acho

function soma (numA, numB, numC) {
  return numA + numB / numC
}

function logArgumentsInFunction (func) {
  return function () {
    console.log.apply(console, arguments)
    return func.apply(null, arguments)
  }
}

function teste (a) {
  return function () {
    console.log(a + arguments)
  }
}

teste('oi ')('teste')

console.log(logArgumentsInFunction(soma)(1, 5, 0))
