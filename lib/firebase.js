import { db } from "@/firebaseConfig";
import { addDoc, collection, getDocs } from "firebase/firestore";

export async function MakeNewReservation(object) {
  try {
    let data = object;
    let dbInstance = collection(db, data.apartmanType);
    let response = await addDoc(dbInstance, {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      parents: data.parents,
      children: data.children,
      note: data.note,
      apartmanNumber: data.apartmanNumber,
      apartmanType: data.apartmanType
    });
    return true;
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

    if (apartmanData != false) {
      apartmanData = apartmanData.filter(data => data.id === id);
      if (apartmanData.length > 0) {
        return apartmanData;
      }
    }
    if (houseData != false) {
      houseData = houseData.filter(data => data.id === id);
      if (houseData.length > 0) {
        return houseData;
      }
    }
    if (houseData != false) {
      topartData = topartData.filter(data => data.id === id);
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

    console.log(data);

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
