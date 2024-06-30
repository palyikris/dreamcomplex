import { FetchApartmanDataByApartmanType } from "@/lib/firebase";
import { GetDatesBetween } from "@/lib/inbetween";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import GanttChart from './../ganttchart/page';


export default function ReservationDiagram({ type }) {

  let [reservations, setReservations] = useState([]);
  

  useEffect(() => {
    FetchApartmanDataByApartmanType(type).then(data => {
      let formattedData = data.map(reservation => {
        let res = {}
        res.id = reservation.id;
        res.name = reservation.name;
        res.start = new Date(reservation.arrDate);
        res.end = new Date(reservation.depDate);
        res.number = reservation.apartmanNumber
        res.progress = 100;
        return res;
      })
      setReservations(formattedData);
    })
  }, [type]);

  console.log(reservations);
  if (reservations.length === 0) {
    return (
      <div className={styles.diagram}>
        <h1>Nincs foglalás</h1>
      </div>
    );
  }

  return (
    <div className={styles.diagram}>
      <GanttChart tasks={reservations}></GanttChart>
    </div>
  )
}