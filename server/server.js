const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var router = require('./models/router');
var bodyParser = require('body-parser');
var md5 = require('blueimp-md5');
var User = require('./models/user');
var check = require('./models/check');
var session = require('express-session');
var FileStore = require('session-file-store');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname +'client/public'));
// database configuration
// http://mlab.com, account:WBruce, password:obsidian0822.
var dbUrl = 'mongodb://aip:aip2018@ds241012.mlab.com:41012/aip';

// app.use(session({
//   name: identityKey,
//   secret: 'chyingp',
//   saveUninitialized: false,
//   resave:false,
//   cookie:{
//     maxAge:10*1000
//   }
// }))

mongoose.connect(dbUrl, {useNewUrlParser : true}, (err) => {

    console.log("mongo db connection", err);

});


app.use(router);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


