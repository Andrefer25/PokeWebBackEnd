var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var noticiaSchema = new Schema({
    title: { type: String },
    subtitle: { type: String },
    notimg: { type: String },
    autor: { type: String },
    fecha: { type: String },
    nottext: { type: String }
});


module.exports = mongoose.model('Noticia', noticiaSchema);