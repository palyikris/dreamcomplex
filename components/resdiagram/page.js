import { FetchApartmanDataByApartmanType } from "@/lib/firebase";
import { GetDatesBetween } from "@/lib/inbetween";
import { useEffect, useState } from "react";
import styles from "./page.module.css";


export default function ReservationDiagram({ type }) {

  let [reservations, setReservations] = useState([]);
  let [currentMonth, setCurrentMonth] = useState(0);
  let [dates, setDates] = useState([]);
  let [rows, setRows] = useState(0);
  let months = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
  let datesReserved1 = [];
  let datesReserved2 = [];
  let datesReserved3 = [];
  let datesReserved4 = [];
  let [datesReserved, setDatesReserved] = useState([]);

  useEffect(() => {
    FetchApartmanDataByApartmanType(type).then(data => {
      let sortedData = data.sort((a, b) => {
        return new Date(b.arrDate) - new Date(a.arrDate);
      });
      sortedData.map(reservation => {
        let dates = GetDatesBetween(reservation.arrDate, reservation.depDate);
        dates.push(reservation.depDate);
        if (reservation.apartmanNumber === 1) {
          datesReserved1 = [...datesReserved1, ...dates];
        }
        if (reservation.apartmanNumber === 2) {
          datesReserved2 = [...datesReserved2, ...dates];
        }
        if (reservation.apartmanNumber === 3) {
          datesReserved3 = [...datesReserved3, ...dates];
        }
        if (reservation.apartmanNumber === 4) {
          datesReserved4 = [...datesReserved4, ...dates];
        }
      })
      setDatesReserved([datesReserved1, datesReserved2, datesReserved3, datesReserved4]);
      setReservations(sortedData);
      let date = new Date();
      let startDateFormatted = `${date.getFullYear()}-${date.getMonth() + 1 + currentMonth}-01`;
      let endDateFormatted = `${date.getFullYear()}-${date.getMonth() + 2 + currentMonth}-01`;

      let dates = GetDatesBetween(startDateFormatted, endDateFormatted);
      setDates(dates);
    })
    
    if(type === "topart") {
      setRows(3);
    }
    if(type === "apartman") {
      setRows(4);
    }
  }, [type, currentMonth]);


  if (reservations.length === 0) {
    return (
      <div className={styles.diagram}>
        <h1>Nincs foglalás</h1>
      </div>
    );
  }

  // console.log(datesReserved);

  return (
    <div className={styles.diagram}>
      {Array.from({ length: rows }, (_, i) => (
        <div className={styles.row}>
          <div className={styles.rowTitle}>Apartman {i + 1}</div>
          {dates.map((date, j) => {
            console.log(datesReserved[i], date)
            if (datesReserved[i].includes(date)) { 
              return (
                <div key={j} className={styles.resSlot}>
                  
                </div>
              )
            }
            return (
              <div key={j} className={styles.slot}>
                
              </div>
            )
          })}
        </div>
      ))}
      <div className={styles.row} style={{borderTop: "2px solid #daa06d"}}>
        <div className={styles.rowTitle} style={{opacity: "0"}}>Apartman 5</div>
        {dates.map((date, index) => {
          let dateWithoutYear = date.split("-").slice(1).join("-");
          return (
            <div key={index} className={styles.slot}>
              {dateWithoutYear}
            </div>
          )
        })}
      </div>
      <div className={styles.controls}>
        <button onClick={() => {
          setCurrentMonth(currentMonth - 1);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </button>
        <span>{months[new Date().getMonth()]}</span>
        <button onClick={() => {
          setCurrentMonth(currentMonth + 1);
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}