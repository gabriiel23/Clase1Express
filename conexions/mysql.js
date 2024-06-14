var MySQL = require('MySQL');
var connection = MySQL.connect('');

MySQL.connection.on('open',(ref)=>{
    console.log('Conectado a MySQL');
});

module.exports=connection;