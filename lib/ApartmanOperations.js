import { db } from "@/firebaseConfig";
import { collection, doc, getDocs } from "firebase/firestore";

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
    response.docs.map(doc => {
      data.push({ ...doc, id: doc.id });
    });
  } catch (error) {
    return error;
  }
}
