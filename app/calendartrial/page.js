"use client";

import DateCalendarComponent from "@/components/calendar/page";
import { useGlobalDate } from "./../../context/datecontexthook";

export default function PageLol() {
  let { reservedDate } = useGlobalDate();

  console.log(reservedDate)

  return <DateCalendarComponent reservation={true} />;
}
