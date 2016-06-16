var express = require('express');
var cors = require('cors');
var app = express();
var fs = require("fs");

app.use(cors());

app.get('/listPeople', function (req, res) {
   fs.readFile( __dirname + "/" + "people.json", 'utf8', function (err, data) {
       res.end( data );
   });
})

app.listen(8081, function(){
  console.log('CORS-enabled web server listening on port 8081');
});
