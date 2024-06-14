// Modelo para MongoDB

var mongoose = require('mongoose');
Schema = mongoose.Schema;

var cancionSchema = new mongoose.Schema({
    nombre:{type:String},
    autor:{type:String},
    interprete:{type:Number},
    genero:{type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra:{type:String},
    anio:{type:Number}
});

var cancion1 = mongoose.model('cancion', cancionSchema);
module.exports = cancion1;