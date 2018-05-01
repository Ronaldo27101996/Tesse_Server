
var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./Dbconnection');
var app = express();
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});
var routes = require('./routes');
app.use(bodyparser.urlencoded({extended: true})); //support x-www-form-urlencoded
app.use(bodyparser.json());

app.use('/tesse',routes);

module.exports = app;
