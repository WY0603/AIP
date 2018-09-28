var nodemailer = require('nodemailer');

var Reservation = require('./reservation');

module.exports = {
    sendMailer : function (Reservation) {

        var mailTransport = nodemailer.createTransport({
            host :'smtp.gmail.com',
            secureConnection: true, // use SSL（secure pattern，防止被窃取信息）
            auth : {
                user : 'danieljing1993@gmail.com',
                pass : 'mrsvgkwwrsxapvjk'
            },
        })

        var mailOptions = {
            from: 'danieljing1993@gmail.com', // sender address
            to: Reservation.email, // list of receivers
            subject: 'EasyDinning reservation confirmation ✔', // Subject line
            text: 'Hello world ✔', // plaintext body
            html: '<b>Hello customer, you have successful made a reservation in '+Reservation.resname+', the reservation time is '+Reservation.time+', '+Reservation.cusno+' people ✔</b>' // html body
        };

        mailTransport.sendMail(mailOptions,function (error,info) {
            if (error){
                console.log(error)
            }else{
                console.log('message sent:'+info.response)
            }
        })

        }

 }