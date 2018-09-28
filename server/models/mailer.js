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
        
        var mail = "<b>Hello customer, <br />" + 
            "You have successful made a reservation for " + Reservation.cusno + " people in " + Reservation.resname + " at " + Reservation.time + " on " + Reservation.date + ".<br />"+
            "Regards,<br />" +
            "EasyDinning </b>" ;

        var mailOptions = {
            from: 'danieljing1993@gmail.com', // sender address
            to: Reservation.email, // list of receivers
            subject: 'EasyDinning Reservation Confirmation ✔', // Subject line
            text: 'Hello world ✔', // plaintext body
            html: mail 

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