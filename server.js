var express = require('express'),
    useragent = require('express-useragent');
var app = express();
var accepts = require('accepts')

app.get('/', function(req,res){
  var uinfo=accepts(req);
  var ip = req.headers['x-forwarded-for'];
  var ua = useragent.parse(req.headers['user-agent']),
      os=ua['os'];
  var lan = uinfo.language()[0];
  console.log(uinfo);
  var result = {
      ipaddress: ip,
      language: lan,
      software: os
  };
  res.send(result);
});

app.listen(8080,  function () {
	console.log('Node.js listening on port 8080...');
});
