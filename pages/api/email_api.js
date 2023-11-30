import { sendMail } from "../../service/mailService";
export default async function handler(req, res) {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        await sendMail(
          "Foglalás",
          body.email,
          `Szép jó napot!

Új foglalás történt a DreamComplex-ben. Csekkold le a felületen!
A foglaló adatai:

Email: ${body.email}
Név: ${body.name}
Telefonszám: ${body.phone}
Érkezés: ${body.arr}
Távozás: ${body.dep}
Felnőttek: ${body.adult}
Gyerekek: ${body.children}
Ház: ${body.type}
Apartman: ${body.number}
Megjegyzés: ${body.note}
Ne felejtsd el kipipálni a foglalást a felületen!

Üdvözlettel,
DreamComplex
`
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        res.status(200).send(req.auth_data);
        break;
      }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message
    });
  }
}
