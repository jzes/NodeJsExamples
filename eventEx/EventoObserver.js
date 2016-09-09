var eventE = require('events').EventEmitter;
var util = require('util');

function EventoObserver() {
    eventE.call(this);
}

util.inherits(EventoObserver, eventE);

EventoObserver.prototype.impar = function(listaValores){
    for (contador = 0; contador < listaValores.length; contador++){
        valor = listaValores[contador];
        //console.log(valor);
        if (valor%2 == 1){
            //console.log('impar de dentro');
            this.emit('impar', valor);
        }
    }
}
