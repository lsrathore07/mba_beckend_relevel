
const nodemailer = require('nodemailer');

const sendEmail = (emailIds, subject, html, text)=>{

    const reqEmailString = emailIds.reduce( (acc,email)=>  acc +  (acc?", ":"") + (email),"");

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lokendrasingh071201@gmail.com',
            pass: 'rqhdhqbxmjlazzgz'
        }
    });
     
    let mailDetails = {
        from: 'lokendrasingh071201@gmail.com',
        to: reqEmailString,
        subject: subject
    };

    if(html){
        mailDetails.html=html;
    }

    if(text){
        mailDetails.text=text;
    }
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs'+err);
        } else {
            console.log('Email sent successfully');
        }
    });
}

module.exports={
    sendEmail
}