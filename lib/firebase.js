// pagefor: store functions related to using the firebase services

import { db } from "@/firebaseConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { makeId } from "./random";
import { GetDatesBetween } from "./inbetween";

// idea: push a new reservation made by the user to the database
export async function MakeNewReservation(object) {
  // prompt: it has a prop named object, the function gets an object with the values of the user's reservation

  // def: trycatch is if an error happens the app doesnt break

  try {
    let data = object;
    let randomString = makeId(20); // prompt: making an id for the new reservation in the database
    randomString = randomString.replace(/\s+/g, "");
    let dbInstance = doc(db, `${data.apartmanType}/${randomString}`); // prompt: setting where to store it in the database

    // prompt: pushing the reservation to the database with the values obtained from the object given to the function
    let response = await setDoc(dbInstance, {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber.replace(/\s+/g, ""),
      parents: data.parents,
      children: data.children,
      note: data.note,
      apartmanNumber: data.apartmanNumber,
      apartmanType: data.apartmanType,
      arrDate: data.arrDate,
      depDate: data.depDate
    });

    return randomString;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// idea: return a reservation filtered by the apartman type eg.: dreamHouse, dreamLelle, and by the number of apartman, eg.: 1,2,3
export async function FetchApartmanReservation(type, number) {
  try {
    let dbInstance = collection(db, type);
    // prompt: getting the set of reservations in the collection of the given apartman type

    let response = await getDocs(dbInstance);

    let data = [];

    response.docs.map(doc => {
      // prompt: converting the contents of the reservations into objects and adding the id
      data.push({ ...doc.data(), id: doc.id });
    });

    // prompt: filtering the reservations leaving only those that have the same apartman number as given to the function
    data = data.filter(doc => doc.apartmanNumber === number);

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// ! --------------------------------------------
// idea: return only one reservation based on an id
export async function FetchReservationById(id) {
  try {
    // prompt: getting all the reservations from all the apartmans
    let apartmanData = await FetchApartmanData();
    let houseData = await FetchHouseData();
    let topartData = await FetchTopartData();

    // prompt: now check if each apartman has reservations at all and if yes filter for the id given in the function
    // prompt: that will result 2 empty lists or undefined or whatevs and one list with only one reservation, the one with the id given
    // prompt: we check which one it is and return the first element aka the correct reservation
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

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// idea: the following three are helper function for the one before, all fetching the reservations from one type of apartman
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

export async function FetchReservedDatesOfApartman(type, number) {
  let data = await FetchApartmanReservation(type, number);
  // prompt: fetch all the reservations from all the apartmans

  let reservedDates = [];

  for (let i = 0; i < data.length; i++) {
    // prompt: for each reservation push the arrival and departure dates to the reservedDates list
    let tempReservedDates = GetDatesBetween(data[i].arrDate, data[i].depDate);
    // idea: create list with dates between the arrival and departure
    for (let j = 0; j < tempReservedDates.length; j++) {
      // prompt: iterate thru these dates
      // prompt: add them to the reservedDates
      reservedDates.push(tempReservedDates[j]);
    }
  }

  return reservedDates;
}
