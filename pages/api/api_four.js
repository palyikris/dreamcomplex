import { sendMail } from "../../service/mailService";
export default async function handler(req, res) {
  try {
    const { method, body } = req;
    switch (method) {
      case "POST": {
        await sendMail(
          "Foglalás",
          body.email,
          `Szia, ${body.name}!

Köszönjük, hogy foglaltál nálunk! A foglalásodat a következő adatokkal rögzítettük:
Telefonszám: ${body.phone}
Érkezés: ${body.arr}
Távozás: ${body.dep}
Felnőttek: ${body.adult}
Gyerekek: ${body.children}
Ház: ${body.type}
Apartman: ${body.number}
Megjegyzés: ${body.note}
Kellemes időtöltést kívánunk!

Üdvözlettel,
DreamComplex
`
        );
        res.status(200).send("Success");
        break;
      }
      case "GET": {
        //Do some thing
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
