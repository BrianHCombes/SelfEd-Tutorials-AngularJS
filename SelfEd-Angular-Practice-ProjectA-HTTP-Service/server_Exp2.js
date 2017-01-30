// server-Exp2.js 
// 01/05/2017
// This is a stripped down version of the
// server file for < SelfEd-Angular-Practice-ProjectA-HTTP-Service > 
// I essentially copied the server file from < Ch06-Page089_http-service > 
// in the Book: < AngularJS Up and Running >
// server.js (Express 4.0)

var express        = require('express');
var app            = express();

app.use(express.static(__dirname));                             // set the static files location /public/img will be /img for users

var router = express.Router();

var images = [
  {id: 1, ImageGroup: 'Mount'},
  {id: 2, ImageGroup: 'Connect'},
  {id: 3, ImageGroup: 'Multi Layer'},
  {id: 4, ImageGroup: 'Anywhere'},
  {id: 5, ImageGroup: 'Reuse'}
];

router.get('/image', function(req, res) {
  res.send(images);
  console.log("\n\nMethod 1: This is the GET method from the server file");
  console.log(images);
});

app.use('/api', router);
app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
