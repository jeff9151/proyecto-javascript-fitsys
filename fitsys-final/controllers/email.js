var nodemailer = require('nodemailer');
var mailConfig = require('./../config/mail-params.js');

module.exports = (mailTo, mailSubject, bodyText) => {

    var transporter = nodemailer.createTransport({
    service: mailConfig.mailService,
    auth: {
        user: mailConfig.email,
        pass: mailConfig.password
    }
    });

    var mailOptions = {
        from: mailConfig.from,
        to: mailTo,
        subject: mailSubject,
        text: bodyText
    };

    transporter.sendMail(mailOptions, function(error, info){
    
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }

    });

}