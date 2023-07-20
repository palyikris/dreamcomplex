import { fetchApartmanData } from "@/lib/ApartmanOperations";

export default function Handler(req, res) {
  if (!req.body.apiKey) {
    res.status(502).json({ message: "Unsuccesful request" });
    return;
  }
  if (req.body.apiKey != process.env.API_KEY) {
    res.status(502).json({ message: "Unsuccesful request" });
    return;
  }

  if (req.method != "PATCH") {
    res.status(502).json({ message: "Unsuccesful request" });
    return;
  }

  let data = fetchApartmanData();
}
