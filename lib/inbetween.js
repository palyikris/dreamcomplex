function GetDatesBetween(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  // prompt: set currentDate to startDate

  // prompt: while currentDate is less than or equal to endDate
  while (currentDate < endDate) {
    dates.push(new Date(currentDate));
    // prompt: push a new Date object with the value of currentDate to the dates array
    currentDate.setDate(currentDate.getDate() + 1);
    // prompt: keep updating currentDate by adding 1 day to it
  }

  return dates;
}
