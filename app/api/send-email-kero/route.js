// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const {
    name,
    apartmanType,
    apartmanNumber,
    startDate,
    endDate
  } = await req.json();
  const message = `
  Szia Ancsa/Keró!
  
  Foglalás történt a következő adatokkal:
  Érkezés: ${startDate}
  Távozás: ${endDate}
  Név: ${name}
  Apartman típusa: ${apartmanType}
  Apartman száma: ${apartmanNumber}
  
  Ez az email a zseniális Kristóf által lett elküldve.
  Adjatok imát értem, hogy ilyen jó vagyok.

  Puszi,
  Pályi "istenkirálycsászár" Kristóf
  
  `;

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // Email options
  let mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: "kerozoltan@gmail.com",
    subject: "Új Foglalás",
    text: message
  };

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
