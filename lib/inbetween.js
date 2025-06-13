import { AddZero } from "./addzero";

export function GetDatesBetween(startDate, endDate) {
  try {
    const dates = [];
    let currentDate = new Date(startDate);
    // increment currentDate to the next day so startDate is not included
    currentDate.setDate(currentDate.getDate() + 1);
    // while currentDate is less than endDate (not equal)
    while (new Date(currentDate) < new Date(endDate)) {
      let formattedDate = `${currentDate.getFullYear()}-${AddZero(
        currentDate.getMonth() + 1
      )}-${AddZero(currentDate.getDate())}`;
      dates.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    // do not include endDate, so return as is
    return dates;
  } catch (error) {
    throw new Error(error);
  }
}
