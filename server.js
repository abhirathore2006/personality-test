var express = require("express");
var path = require("path");
//var config = require("./webpack.config.js")
//var webpack = require('webpack');

var app = express();

app.use(express.static('./node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/vegas/dist'));
app.use(express.static('./public'));

var port = process.env.PORT;

var server = app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
  //console.log("running on ip",process.env.IP)
});



