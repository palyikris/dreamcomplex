import { useState, useEffect } from "react";
import styles from "./page.module.css";
import {
  DeleteReservation,
  FetchApartmanDataByApartmanType,
  SetDocumentSeen
} from "@/lib/firebase";
import Loader from "../loader/page";

export default function ReservationTable(props) {
  let { type } = props;
  let [reservations, setReservations] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [nOfRows, setNOfRows] = useState(10);

  const HandleDeletion = (type, id) => {
    let confirm = window.confirm("Biztosan törölni szeretnéd?");
    if (confirm) {
      DeleteReservation(type, id).then(() => {
        setNOfRows(nOfRows - 1);
      });
    }
  };

  useEffect(
    () => {
      FetchApartmanDataByApartmanType(type).then(data => {
        let sortedData = data.sort((a, b) => {
          return new Date(b.arrDate) - new Date(a.arrDate);
        });
        setNOfRows(sortedData.length);
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
              placeholder={reservations.length}
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
          <div />
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
            placeholder={reservations.length}
          />
        </div>
      </div>
      {reservations.map((reservation, i) => {
        return (
          <div className={styles.reservation} key={i}>
            <div className={styles.reservationData}>
              <div className={styles.deleteWrapper}>
                <button
                  className={styles.delete}
                  onClick={() => {
                    HandleDeletion(type, reservation.id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
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
