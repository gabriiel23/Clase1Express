// Modelo para MySQL

var MySQL = require('MySQL');
Schema = MySQL.Schema;

var cancion = new MySQL.Schema({
    nombre:{type:String},
    autor:{type:String},
    interprete:{type:Number},
    genero:{type:String},
    duracion:{type:Number},
    fotografia:{type:Object},
    letra:{type:String},
    anio:{type:Number}
});

var cancion2 = MySQL.model('cancion', cancion);
module.exports = cancion2;