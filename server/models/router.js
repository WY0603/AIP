var express = require('express');
var User = require('./user');
var Restaurant = require('./restaurant');
var Reservation = require('./reservation');
var check = require('./check');
var router = express.Router();
var md5 = require('blueimp-md5')
var mailer = require('./mailer')

router.post('/', function(req, res){

})
//process login request
router.post('/login', function(req, res){
    //get request params
    var user = new User(req.body);
    // SQL inject check
    if (check.checkInject(req.body)){
        //console.log("login");
        //check database
        User.findOne({
                username: user.username,
                password: md5(md5(user.password))
            },function (err, user) {
            if (err) { // error process
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            if (!user) { // no user
                return res.status(200).json({
                    err_code: 1,
                    message: 'Username or password is invalid.'
                })
            }
            // req.session.regenerate(function(err){
                // req.session.userInfo = '123';
                res.status(200).json({
                    err_code: 0,
                    message: 'login success'
                })
            })
        // })
    }else{
        res.send('error');
    }



})
// process register request
router.post('/register', function(req, res){
    // get request params
    var user = new User(req.body)
    console.log(req.body);
    //Encrypt password with md5
    user.password = md5(md5(user.password))
    // check database if there already have same username
    User.findOne({
        username: user.username,
    },function (err, result) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            if (result) {
                console.log(result)
                return res.status(200).json({
                    err_code: 1,
                    message: 'Username existed, please change to another username.'
                })
            }else{
            user.save()
            console.log("---------------")
            res.status(200).json({
                err_code: 0,
                message: 'Signup successfully.'
            })
        }
    })
})


// get all restaurant list
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

// get restaurant information by id
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

// router.get('/resName/:rid', function(req, res){
    
//     Restaurant.find({_id: req.params.rid},function (err, result) {
//              console.log(req.params.rid);
//             if (err) {
//                 return res.status(500).json({
//                     err_code: 500,
//                     message: err.message
//                 })
//             }
            
//             res.status(200).json(result)
//     })

// })
//process reservation request
router.post('/reservation', function(req, res){
    // get reservation request
    var reserv = new Reservation(req.body)
    //console.log(reserv);
    //find the same time reservation
    Reservation.find({
        r_id: reserv.r_id,
        time: reserv.time,
        date: reserv.date
    },function (err, result) {
            //console.log(result);
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: err.message
                })
            }
            // check if exceed the max number
         Restaurant.find({_id: reserv.r_id
         }, function (err, res_result) {
            if (res_result[0].r_maxtable > result.length){
                //console.log(res_result[0].r_name);
                reserv.resname = res_result[0].r_name;
                //console.log(reserv.resname);
                // all ok send email
                mailer.sendMailer(reserv);
                   reserv.save(); // save reservation information to database
                   res.status(200).json({
                   err_code: 0,
                    
                })
            }else{ // if it reach max number
                 res.status(500).json({
                    err_code: 1,
                    message: 'Sorry, reservation at this time is full.'
                })
            }
         })   
           
    })
    
   
})


module.exports = router;




