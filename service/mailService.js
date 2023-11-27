var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PWD
    },
    tls: {
      secure: true,
      requireTLS: true,
      authMethod: "PLAIN"
    }
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: otpText
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
