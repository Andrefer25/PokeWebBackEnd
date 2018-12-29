var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var pokemonSchema = new Schema({
	name: { type: String },
	dexnumber: { type: String },
	type1: { type: String },
	type2: { type: String },
	dexinfo: { type: String },
	height: { type: String },
	weight: { type: String },
	category: { type: String },
	pokeimg: { type: String },
	pokemini: { type: String }
});


module.exports = mongoose.model('Pokemon', pokemonSchema);