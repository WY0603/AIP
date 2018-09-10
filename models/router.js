var express = require('express');
var User = require('./user');
var check = require('./check');
var router = express.Router();
var md5 = require('blueimp-md5')

router.post('/', function(req, res){

})

router.post('/login', function(req, res){
    
    var user = new User(req.body);
    if (check.checkInject(req.body)){
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
            res.send('/restaurant');
        }
        )
    }else{
        res.send('error');
    }

})

router.post('/register', function(req, res){
    var user = new User(req.body)
    console.log(user.password);
    user.password = md5(md5(user.password))
    User.find({
        username: user.username
    }),function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            if (user.username) {
                return res.status(200).json({
                    err_code: 1,
                    message: 'Username existed, please change another username.'
                })
            }
    }
    
    res.redirect('/restaurant')
})

router.get('/searchList', function(req, res){

})

module.exports = router;




