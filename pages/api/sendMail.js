const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "Ali.wer@hotmail.com",
    pass: "Az0583318262",
  },
});

const sendMail = (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: email,
    subject: `New message from ${name}`,
    text: message,
    html: `<p>${message}</p><p>From ${name} (${email})</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: message not sent');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent successfully');
    }
  });
};
module.exports = sendMail;
