// This is the server file for < SelfEd-Angular-Practice-ProjectA-HTTP-Service> 
// I essentially copied the server file from < Ch06-Page089_http-service > 
// in the Book: < AngularJS Up and Running >
// server.js (Express 4.0)

var express        = require('express');
//var morgan         = require('morgan');
//var bodyParser     = require('body-parser');
//var methodOverride = require('method-override');
var app            = express();


// app.use(express.static(__dirname + '/support'));             // set the static files location /public/img will be /img for users
app.use(express.static(__dirname));                             // set the static files location /public/img will be /img for users
//app.use(morgan('dev')); 					// log every request to the console
//app.use(bodyParser()); 						// pull information from html in POST
//app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var images = [
  {id: 1, ImageGroup: 'Mount'},
  {id: 2, ImageGroup: 'Connect'},
  {id: 3, ImageGroup: 'Multi Layer'},
  {id: 4, ImageGroup: 'Anywhere'},
  {id: 5, ImageGroup: 'Reuse'}

];
var lastId = 6;

router.get('/image', function(req, res) {
  res.send(images);
  console.log("\n\nMethod 1: This is the GET method from the server.js file");
  console.log(images);
});

router.get('/note/:id', function(req, res) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == req.params.id) {
      res.send(notes[i]);
      break;
    }
  }
  console.log("Testing4");
  res.send({msg: 'Note not found'}, 404);
});


app.use('/api', router);
app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
