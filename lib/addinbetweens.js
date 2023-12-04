export function AddInBetweens(dateList) {
  const outputList = dateList;
  console.log(outputList);

  for (let i = 0; i < dateList.length - 1; i++) {
    const currentDate = new Date(dateList[i]);
    const nextDate = new Date(dateList[i + 1]);

    if (nextDate.getDate() - currentDate.getDate() <= 1) {
      const inBetweenDate = new Date(currentDate);
      inBetweenDate.setDate(currentDate.getDate() + 1);
      outputList.push(inBetweenDate);
    }
  }

  return outputList;
}
