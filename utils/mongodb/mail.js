const nodemailer = require("nodemailer");
const emailSend = async (toMail) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9fe535c5cc938c",
          pass: "b362786362218a"
        } 
      });
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>',
      to: toMail, 
      subject: "Hello ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });
  }
  
  module.exports = { emailSend }