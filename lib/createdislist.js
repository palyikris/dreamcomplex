import { AddInBetweens } from "./addinbetweens";

export function CreateListOfDisabledDates(dateList) {
  dateList = dateList.sort((a, b) => new Date(a) - new Date(b));
  dateList = [...new Set(dateList)];
  dateList = AddInBetweens(dateList);
  return dateList;
}
