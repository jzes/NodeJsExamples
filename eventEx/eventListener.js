var EventoObserver = require('./EventoObserver');
var impar = new EventoObserver();

impar.on('impar', function(val){
    console.log('impar '+val.toString());
});

impar.salve([1,2,3,4,5]);
