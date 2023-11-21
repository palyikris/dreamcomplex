"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import { useApartman } from "@/context/contexthook";
import ReserveInterfaceComponent from "@/components/reserveInterface/page";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer/page";

export default function ReservationPage() {
  let {
    isDreamHouseOpen,
    isDreamApartmanOpen,
    isDreamTopartOpen,
    setIsDreamHouseOpen,
    setIsDreamApartmanOpen,
    setIsDreamTopartOpen
  } = useApartman();

  let router = useRouter();

  return (
    <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <div className={styles.heroElements}>
          <h1>
            Foglaljon egy <span>Dream</span> helyszínen!
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
              router.push("/reservation#reserveInterface");
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
              router.push("/reservation#reserveInterface");
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
              router.push("/reservation#reserveInterface");
            }}
          >
            <h1>Dream Tópart</h1>
            <p>Balatonlellén, a kertből kilépve már a part vár.</p>
          </button>
        </div>
      </div>
      <div id="reserveInterface">
        {/* prompt: this opens the right section based on which section was chosen by the user */}
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
      <Footer />
    </div>
  );
}
