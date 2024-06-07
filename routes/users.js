var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var nombre = req.query.nombre
  res.send('Hola '+ nombre + ", como estas?");
});

router.post('/id', function(req, res, next) {
  console.log(req.body);
  var nombre = req.body.nombre
  res.send('Hola '+ nombre + ", como estas?");
});

router.post('/suma', function(req, res, next) {  
  var valor1 = parseFloat(req.body.valor1);
  var valor2 = parseFloat(req.body.valor2);

  var resultado = valor1 + valor2;

  res.send("La suma de " + valor1 + " + " + valor2 + " es igual a: " + resultado);
});

router.post('/vocalesConsonantes', function(req, res, next) {
  var nombre = req.body.nombre;

  var vocales = 'aeiouAEIOU';
  var n_vocales = 0;
  var n_consonantes = 0;

  for (var i = 0; i < nombre.length; i++) {
    if (vocales.indexOf(nombre[i]) !== -1) {
      n_vocales++;
    } else if (nombre[i].match(/[a-zA-Z]/)) {
      n_consonantes++;
    }
  }

  res.send("Nombre: " + nombre + " | Vocales: " + numVocales + " | Consonantes: " + numConsonantes);
});

module.exports = router;
