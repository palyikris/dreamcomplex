// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");

export function sendMail(subject, to, text) {
  sgMail.setApiKey(
    "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"
  );
  const msg = {
    to: "palyi.kristof@gmail.com",
    from: "dreamcomplex.noreply@gmail.com",
    subject: subject,
    text: text,
    html: text
  }; // Change to your recipient // Change to your verified sender
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch(error => {
      console.log(error);
    });
}
