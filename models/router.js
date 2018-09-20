var express = require('express');
var User = require('./user');
var Restaurant = require('./restaurant');
var Reservation = require('./reservation');
var check = require('./check');
var router = express.Router();
var md5 = require('blueimp-md5')

router.post('/', function(req, res){

})

router.post('/login', function(req, res){
    
    var user = new User(req.body);
    //console.log(req.body);
    if (check.checkInject(req.body)){
        //console.log("login");
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
            req.session.regenerate(function(err){
                req.session.userInfo = '123';
                res.status(200).json({
                    err_code: 0,
                    message: 'login success'
                })
            })


        })
    }else{
        res.send('error');
    }



})

router.post('/register', function(req, res){
    var user = new User(req.body)
    console.log(req.body);
    user.password = md5(md5(user.password))
    User.find({
        username: user.username
    },function (err, result) {
            console.log(56);
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            if (result.username) {
                return res.status(200).json({
                    err_code: 1,
                    message: 'Username existed, please change to another username.'
                })
            }
            user.save()
            res.status(200).json({
                err_code: 0,
                message: 'Signup successfully.'
            })
    })
    
   
})



router.get('/resListAll', function(req, res){

    Restaurant.find(function (err, result) {
             
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            
            
            res.status(200).json(result)
    })

})


router.get('/resDetails/:id', function(req, res){
    
    Restaurant.find({_id: req.params.id},function (err, result) {
             
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            
            res.status(200).json(result)
    })

})

router.post('/reservation', function(req, res){
    var reserv = new Reservation(req.body)
   
    Reservation.find({
        r_id: reserv.r_id,
        time: reserv.time,
        date: reserv.date
    },function (err, result) {
            console.log(result);
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
         Restaurant.find({_id: reserv.r_id
         }, function (err, res_result) {
            if (res_result[0].r_maxtable > result.length){
                   reserv.save(); 
                   res.status(200).json({
                   err_code: 0,
                    
                })
            }else{
                 res.status(500).json({
                    err_code: 1,
                    message: 'Sorry, reservation at this time is full.'
                })
            }
         })   
           
    })
    
   
})


module.exports = router;




