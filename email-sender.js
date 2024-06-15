// email-sender.js
const nodemailer = require('nodemailer');


const senderEmail = 'profeskay@yahoo.com';
const senderPassword = 'themaniscool';

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
        user: 'profeskay@yahoo.com',
        pass: '****'
    }
});

const mailOptions = {
    from: 'profeskay@yahoo.com',
    to: 'africanweirdoblog@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from a Node.js application!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});