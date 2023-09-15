"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import { useApartman } from "@/context/contexthook";
import ReserveInterfaceComponent from "@/components/reserveInterface/page";

export default function ReservationPage() {
  let {
    isDreamHouseOpen,
    isDreamApartmanOpen,
    isDreamTopartOpen,
    setIsDreamHouseOpen,
    setIsDreamApartmanOpen,
    setIsDreamTopartOpen
  } = useApartman();

  return (
    <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <div className={styles.heroElements}>
          <h1>
            Foglaljon valamelyik <span>Dream</span> helyszínen!
          </h1>
          <p>Köszönjük, hogy nálunk száll meg!</p>
        </div>
        <div className={styles.apartmans}>
          <button
            className={styles.apartman}
            onClick={() => {
              setIsDreamHouseOpen(true);
              setIsDreamApartmanOpen(false);
              setIsDreamTopartOpen(false);
            }}
          >
            <h1>Dream House</h1>
            <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
          </button>
          <button
            className={styles.apartman}
            onClick={() => {
              setIsDreamApartmanOpen(true);
              setIsDreamHouseOpen(false);
              setIsDreamTopartOpen(false);
            }}
          >
            <h1>Dream Apartman</h1>
            <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
          </button>
          <button
            className={styles.apartman}
            onClick={() => {
              setIsDreamTopartOpen(true);
              setIsDreamHouseOpen(false);
              setIsDreamApartmanOpen(false);
            }}
          >
            <h1>Dream Tópart</h1>
            <p>Balatonlellén, a kertből kilépve már a part vár.</p>
          </button>
        </div>
      </div>
      <div id="reserveInterface">
        {isDreamHouseOpen
          ? <ReserveInterfaceComponent title="Dream House" />
          : <div />}
        {isDreamApartmanOpen
          ? <ReserveInterfaceComponent title="Dream Apartman" />
          : <div />}
        {isDreamTopartOpen
          ? <ReserveInterfaceComponent title="Dream Tópart" />
          : <div />}
      </div>
    </div>
  );
}
