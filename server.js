var express = require('express');
var moment = require('moment');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));

app.get('/:timestamp', function(req, res){
  var time = moment(req.params.timestamp, 'MMMM DD YYYY', true);
  if (!time.isValid())
    time = moment.unix(req.params.timestamp);
    
  if (!time.isValid()) {
    res.json({
      'humanReadable': null,
      'unix': null
    });
  }
  
  res.json({
    'humanReadable': time.format('MMMM DD, YYYY'),
    'unix': time.format('X')
  });
});


app.listen(app.get('port'), function () {
  console.log(`Server listening on port ${app.get('port')}`);
});