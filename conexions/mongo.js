var mongoose = require('mongoose');
var connection = mongoose.connect('localhost:27017');

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a MongoDb');
});

module.exports=connection;