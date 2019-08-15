var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(__dirname + "/dist"));

/* missing a GET for the pages here
app.get('/rba_new', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
}) */

var port = process.env.PORT || 8080;
app.listen(port);
console.log('server started '+ port);
