import ArrivalCalendar from "./arrcalendar/page";
import DepartureCalendar from "./depcalendar/page";
import DisabledCalendar from "./discalendar/page";

export default function DateCalendarComponent(props) {
  let { reservation, isDisabled } = props;

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
