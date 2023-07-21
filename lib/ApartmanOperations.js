import { db } from "@/firebaseConfig";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";

export async function fetchApartmanData(apName, apNumber) {
  try {
    let dbInstance = doc(db, `/${apName}/apartman_${apNumber}`);
    let response = await getDocs(dbInstance);
    let data = response.doc();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchApartmans(apName) {
  try {
    let dbInstance = collection(db, apName);
    let response = await getDocs(dbInstance);
    let data = [];
    response.docs.map((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    return data;
  } catch (error) {
    return error;
  }
}

export async function reserveApartman(
  coll,
  apNumber,
  startDate,
  endDate,
  name,
  email,
  phone
) {
  try {
    let dbInstance = collection(db, `${coll}_reservation`);

    let response = await addDoc(dbInstance, {
      apNumber: apNumber,
      startDate: startDate,
      endDate: endDate,
      name: name,
      email: email,
      phone: phone
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
