const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var router = require('./models/router');
var bodyParser = require('body-parser');
var md5 = require('blueimp-md5');
var User = require('./models/user');
var check = require('./models/check');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// database configuration
// http://mlab.com, account:WBruce, password:obsidian0822.
var dbUrl = 'mongodb://aip:aip2018@ds241012.mlab.com:41012/aip';



mongoose.connect(dbUrl, {useNewUrlParser : true}, (err) => {

    console.log("mongo db connection", err);

});

app.post('/test', function(req, res){
  res.send('hello world');
});

app.use(router);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


