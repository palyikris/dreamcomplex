// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {

  const {email, type, token} = await req.json();

  const message = `
  Kedves Vendégünk!<br><br>
  
  Reméljük, kellemesen telt az időtöltés a Dream Komplexumokban.<br>Kérjük, hogy értékelje szállásunkat az alábbi linken:<br>
  <a href="https://www.dreamkomplexum.com/reviews/${type}/${token}">Kattintson az értékeléshez!</a>
  <br>Várjuk visszajelzését! Köszönjük!<br><br>
  Ne válaszoljon erre az email-re!<br><br>

  Üdvözlettel,<br>
  DreamKomplex csapata
  `;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Email options;
  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Hogy telt a nyaralás?",
    html: message
  }

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}