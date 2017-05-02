//Função para refatoração, não é apenas para NodeJS, funciona também para JS

const fat = (x) => (!x) ? 1 : x*fat(x-1)

// A mesma função é escrita dessa outra maneira, sendo que a primeira (a de cima) é com ES6.

function fato(x){
    return (!x) ? 1 : x*fat(x-1);
};