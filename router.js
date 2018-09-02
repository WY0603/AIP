var express = require('express');
var User = require('./models/user');
var router = express.Router();

router.post('/', function(req, res){

})

router.post('/login', function(req, res){
    
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

router.post('/register', function(req, res){
    
})

router.get('/searchList', function(req, res){

})