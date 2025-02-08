const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
    },
});

// Email options
const mailOptions = {
    from: process.env.GMAIL_USER, // Sender address
    to: 'graceboke33@gmail.com', // Recipient address
    subject: 'Test Email from Node.js', // Subject line
    text: 'Hello, this is a test email sent from Node.js!', // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});