var express  = require("express"),
    app      = express(),
    http     = require("http"),
    configMensaje = require('./configmensaje'),
    nodemailer = require('nodemailer'),
    server   = http.createServer(app),
    mongoose = require('mongoose')
    cors = require('cors'); 

app.configure(function () {
  app.use(cors())
  app.use(express.bodyParser()); //con bodyParser permitimmos que pueda parsear JSON
  app.use(express.methodOverride()); //methodOverride nos permite implementar y personalizar metodos HTTP
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

app.post('/formulario', (req, res) => {
  configMensaje(req.body);
  res.status(200).send();
})

routes = require('./routes/pokemons')(app);
routesnot = require('./routes/noticias')(app);

mongoose.connect('mongodb://localhost/pokemons', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Connected to Pokebase');
	}
});

mongoose.createConnection('mongodb://localhost/noticias', function (err, res) {
  if (err) {
    console.log('ERROR: connecting to Notibase. ' + err);
  } else {
    console.log('Connected to Notibase');
  }
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});