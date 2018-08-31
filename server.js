const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var md5 = require('blueimp-md5')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// http://mlab.com, account:wangyao0603, password:obsidian0822.
var dbUrl = 'mongodb://aip:aip2018@ds241012.mlab.com:41012/aip';

var User = mongoose.model('User', {
    username: String,
    password: String,
    email: String

})

mongoose.connect(dbUrl, {useNewUrlParser : true}, (err) => {
    console.log("mongo db connection", err);
})
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/register', (req, res) => {
    var user = new User(req.body)

    user.password = md5(md5(user.password))


    user.save((err) => {
        if(err)
            sendStatus(500)
    })

    res.redirect('/restaurant')
})

app.post('/login',function (req,res) {

    var user = new User(req.body);

    User.findOne({
            username: user.username,
            password: md5(md5(user.password))
        },function (err, user) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Username or password is invalid.'
            })
        }
        res.redirect('/restaurant')
    }
    )

})
// create a GET route
app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});