import { db } from "@/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { makeId } from "./random";

export async function MakeNewReservation(object) {
  try {
    let data = object;
    let randomString = makeId(20);
    randomString = randomString.replace(/\s+/g, "");
    let dbInstance = doc(db, `${data.apartmanType}/${randomString}`);
    if (data.note.replace(/\s+/g, "") === "Azlenneakérésem,hogy...") {
      note = "";
    }
    let response = await setDoc(dbInstance, {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      parents: data.parents,
      children: data.children,
      note: data.note,
      apartmanNumber: data.apartmanNumber,
      apartmanType: data.apartmanType
    });
    return randomString;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function FetchApartmanReservation(type, number) {
  try {
    let dbInstance = collection(db, type);

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    data = data.filter(doc => doc.apartmanNumber === number);

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// ! --------------------------------------------
export async function FetchReservationById(id) {
  try {
    let apartmanData = await FetchApartmanData();
    let houseData = await FetchHouseData();
    let topartData = await FetchTopartData();

    if (apartmanData != false && apartmanData.length > 0) {
      apartmanData = apartmanData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (apartmanData.length > 0) {
        return apartmanData;
      }
    }
    if (houseData != false && houseData.length > 0) {
      houseData = houseData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (houseData.length > 0) {
        return houseData;
      }
    }
    if (topartData != false && topartData.length > 0) {
      topartData = topartData.filter(
        data => data.id.replace(/\s+/g, "") === id.replace(/\s+/g, "")
      );
      if (topartData.length > 0) {
        return topartData;
      }
    }

    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function FetchApartmanData() {
  try {
    let dbInstance = collection(db, "dreamapartman");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function FetchHouseData() {
  try {
    let dbInstance = collection(db, "dreamhouse");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function FetchTopartData() {
  try {
    let dbInstance = collection(db, "dreamtopart");

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      data.push({ ...doc.data(), id: doc.id });
    });

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}
// ! -------------------------------------------
