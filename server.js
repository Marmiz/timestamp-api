var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/:timestamp', function(req, res){
  var time = req.params.timestamp;
  res.send(time);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});