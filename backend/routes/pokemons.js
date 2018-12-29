//File: routes/tvshows.js
module.exports = function(app) {

  var Pokemon = require('../models/pokemon.js');

  //GET - Return all tvshows in the DB
  findAllPokemons = function(req, res) {
  	Pokemon.find(function(err, pokemons) {
  		if(!err) {
        console.log('GET /pokemons')
  			res.send(pokemons);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
  	Pokemon.findById(req.params.id, function(err, pokemon) {
  		if(!err) {
        console.log('GET /pokemon/' + req.params.id);
  			res.send(pokemon);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //Link routes and functions
  app.get('/pokemons', findAllPokemons);
  app.get('/pokemon/:id', findById);
}