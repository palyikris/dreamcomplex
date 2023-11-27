import styles from "../page.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import { AddZero } from "@/lib/addzero";
import { useGlobalDate } from "@/context/datecontexthook";
import Loader from "@/components/loader/page";

export default function ArrivalCalendar(props) {
  let { setArrDate } = useGlobalDate();
  let { apartmanNumber, type } = props;
  let date = new Date();
  let dateForCalendarDefaultValue = `${AddZero(date.getFullYear())}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let dateForCalendarMaxValue = `${AddZero(date.getFullYear() + 1)}-${AddZero(
    date.getMonth() + 1
  )}-${AddZero(date.getDate())}`;
  let [value, setValue] = useState(dayjs(dateForCalendarDefaultValue));
  let [datesToDisable, setDatesToDisable] = useState([]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateCalendar", "DateCalendar"]}>
        <DemoItem>
          <DateCalendar
            value={value}
            onChange={newValue => {
              setValue(newValue);
              setArrDate(newValue);
            }}
            views={["year", "month", "day"]}
            showDaysOutsideCurrentMonth
            disablePast
            fixedWeekNumber={6}
            maxDate={dayjs(dateForCalendarMaxValue)} //   sx={{
            //     bgcolor: "#e9c6a7",
            //     borderRadius: "10px"
            //   }}
            className={styles.calendar}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
