const email_sender = require('nodemailer')

var transporter = email_sender.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohamedsanabi@gmail.com',
      pass: 'Password'
    }
  });
  
  var mailOptions = {
    from: 'mohamedsanabi@gmail.com',
    to: 'sanabi_mohamed@ohmtail.fr',
    subject: 'teste send Email using Node.js',
    text: 'Hello, i am NodeJs!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });