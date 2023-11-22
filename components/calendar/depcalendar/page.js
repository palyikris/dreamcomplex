import styles from "../page.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { AddZero } from "@/lib/addzero";
import { useGlobalDate } from "@/context/datecontexthook";
import DisabledCalendar from "../discalendar/page";

export default function DepartureCalendar(props) {
  let { setDepDate } = useGlobalDate();

  let date = new Date();
  let dateForCalendarDefaultValue = `${AddZero(date.getFullYear())}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let dateForCalendarMaxValue = `${AddZero(date.getFullYear() + 1)}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let [value, setValue] = useState(dayjs(dateForCalendarDefaultValue));

  if (props.isDisabled) {
    let { defValue } = props;
    return <DisabledCalendar defValue={defValue} />;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={newValue => {
              setValue(newValue);
              setDepDate(newValue);
            }}
            views={["year", "month", "day"]}
            showDaysOutsideCurrentMonth
            disablePast
            fixedWeekNumber={6}
            maxDate={dayjs(dateForCalendarMaxValue)} //     bgcolor: "#e9c6a7", //   sx={{
            //     borderRadius: "10px"
            //   }}
            className={styles.calendar}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
