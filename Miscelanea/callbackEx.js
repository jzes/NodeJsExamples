
function conta (ate, callBack) {
  var i = 0
  for (i; i < ate; i++) {
    console.log('Contador.: ' + i.toString() + ' as ' + Date.now())
  }

  callBack('Findou-se as ' + Date.now())
}

// chamando a função acima
conta(10, function (retorno) { console.log(retorno) })
