const execute = (page, graph) => {
    graph.get('/'+page+'?fields=name,location', function(err, res){
        console.log("Nome da Página: "+res.name);

        console.log("Localização: "+res.location.city+", "+res.location.state+" - "+res.location.country);
        console.log(res.location.street+", CEP: "+res.location.zip);
    });
};

module.exports = execute;