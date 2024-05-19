import { useState, useEffect } from "react";
import styles from "./page.module.css";
import {
  FetchApartmanDataByApartmanType,
  SetDocumentSeen
} from "@/lib/firebase";
import Loader from "../loader/page";

export default function ReservationTable(props) {
  let { type } = props;
  let [reservations, setReservations] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [nOfRows, setNOfRows] = useState(10);

  useEffect(
    () => {
      FetchApartmanDataByApartmanType(type).then(data => {
        let sortedData = data.sort((a, b) => {
          return new Date(b.arrDate) - new Date(a.arrDate);
        });
        sortedData = sortedData.slice(0, nOfRows);
        setReservations(sortedData);
        setIsLoading(false);
      });
    },
    [type, nOfRows]
  );

  if (isLoading) {
    return <Loader main={true} />;
  }

  if (reservations.length === 0) {
    return (
      <div className={styles.reservationTable}>
        <div className={styles.reservation}>
          <div className={styles.reservationData}>
            <div className={styles.data}>Név</div>
            <div className={styles.data}>Email</div>
            <div className={styles.data}>Telefon</div>
            <div className={styles.data}>Felnőttek</div>
            <div className={styles.data}>Gyerekek</div>
            <div className={styles.data}>Érkezés</div>
            <div className={styles.data}>Távozás</div>
            <div className={styles.data}>Apartman</div>
            <div className={styles.data}>Comment</div>{" "}
          </div>
          <div className={styles.seen}>
            <input
              type="text"
              value={nOfRows}
              onChange={e => {
                setNOfRows(e.target.value);
              }}
            />
          </div>
        </div>
        <Loader main={false} />
        <h1>Nincs foglalás</h1>
      </div>
    );
  }

  return (
    <div className={styles.reservationTable}>
      <div className={styles.reservation}>
        <div className={styles.reservationData}>
          <div className={styles.data}>Név</div>
          <div className={styles.data}>Email</div>
          <div className={styles.data}>Telefon</div>
          <div className={styles.data}>Felnőtt</div>
          <div className={styles.data}>Gyerek</div>
          <div className={styles.data}>Érkezés</div>
          <div className={styles.data}>Távozás</div>
          <div className={styles.data}>Apartman</div>
          <div className={styles.data}>Comment</div>{" "}
        </div>
        <div className={styles.seen}>
          <input
            type="text"
            value={nOfRows}
            onChange={e => {
              setNOfRows(e.target.value);
            }}
          />
        </div>
      </div>
      {reservations.map((reservation, i) => {
        return (
          <div className={styles.reservation} key={i}>
            <div className={styles.reservationData}>
              <div className={styles.data}>
                <p>
                  {reservation.name}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.email}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.phoneNumber}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.parents}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.children}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.arrDate}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.depDate}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.apartmanNumber}
                </p>
              </div>
              <div className={styles.data}>
                <p>
                  {reservation.note}
                </p>
              </div>
            </div>
            {reservation.seen
              ? <div className={styles.seen}>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0zm.75-10.5a.75.75 0 000 1.5h1.599l-2.223 3.334A.75.75 0 0010.5 13.5h3a.75.75 0 000-1.5h-1.599l2.223-3.334A.75.75 0 0013.5 7.5h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              : <div className={styles.seen}>
                  <button
                    onClick={() => {
                      SetDocumentSeen(type, reservation.id);
                      setNOfRows(nOfRows + 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                      <path
                        fillRule="evenodd"
                        d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>}
          </div>
        );
      })}
    </div>
  );
}
