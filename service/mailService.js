var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, text) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PWD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log("hiba van geci");
      console.error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
