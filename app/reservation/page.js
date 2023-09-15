"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";

export default function ReservationPage() {
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
          <button className={styles.apartman}>
            <h1>Dream House</h1>
            <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
          </button>
          <button className={styles.apartman}>
            <h1>Dream Apartman</h1>
            <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
          </button>
          <button className={styles.apartman}>
            <h1>Dream Tópart</h1>
            <p>Balatonlellén, a kertből kilépve már a part vár.</p>
          </button>
        </div>
      </div>
    </div>
  );
}
