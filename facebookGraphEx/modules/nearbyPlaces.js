const execute = (q, type, lat, long, graph) => {
    if(!lat || !long)
        return console.log('Informe a latitude e a longitude');

    graph.get('/search?q='+q+'&type='+type+'&center='+lat+','+long+'&distance=1000', function(err, res){
        var count = Object.keys(res.data).length;;
        
        for(var i = 0; i < count; i++){
            var place = res.data[i];

            console.log(place.name);
            console.log("Localização: "+place.location.city+", "+place.location.state+" - "+place.location.country);
            console.log(place.location.street+", CEP: "+place.location.zip);
            console.log("-------------------");
            console.log("\n");
        }
    });
};

module.exports = execute;