const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');

// http://mlab.com, account:wangyao0603, password:obsidian0822.
var dbUrl = 'mongodb://aip:aip2018@ds241012.mlab.com:41012/aip';

var User = mongoose.model('User', {
    userName: String,
    password: String,
    email: String

})

mongoose.connect(dbUrl, {useNewUrlParser : true}, (err) => {
  console.log("mongo db connection", err);
})
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});