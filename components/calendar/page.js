import { FetchReservedDatesOfApartman } from "@/lib/firebase";
import ArrivalCalendar from "./arrcalendar/page";
import DepartureCalendar from "./depcalendar/page";
import DisabledCalendar from "./discalendar/page";
import { useEffect, useState } from "react";
import { AddInBetweens } from "@/lib/addinbetweens";

export default function DateCalendarComponent(props) {
  let { reservation, isDisabled, apartmanNumber, type } = props;
  let [datesReserved, setDatesReserved] = useState([]);

  useEffect(
    () => {
      FetchReservedDatesOfApartman(type, apartmanNumber).then(data => {
        setDatesReserved(
          AddInBetweens(
            [...new Set(data)].sort((a, b) => new Date(a) - new Date(b))
          )
        );
      });
    },
    [apartmanNumber, type]
  );

  console.log(datesReserved);

  if (reservation) {
    if (isDisabled) {
      let { defValue } = props;
      return <DisabledCalendar defValue={defValue} />;
    }
    return <ArrivalCalendar reservation={reservation} />;
  } else {
    if (isDisabled) {
      let { defValue } = props;
      return <DisabledCalendar defValue={defValue} />;
    }
    return <DepartureCalendar reservation={reservation} />;
  }
  return <div />;
}
