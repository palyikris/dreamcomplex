"use client";

import { FetchReservationById } from "@/lib/firebase";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReservationData from "@/components/resdata/page";
import Loader from "../../../components/loader/page";

export default function ReservationTrackerPage() {
  let path = usePathname();
  path = path.split("/");
  let id = path[path.length - 1];
  let [data, setData] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    FetchReservationById(id).then(reservation => {
      setData(reservation);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <Loader main={true} />
      </div>
    );
  }

  if (!data || data === undefined) {
    alert("Valami hiba történt!");

    return (
      <div className={styles.container}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.map(reservation => {
        return (
          <div className={styles.container}>
            <ReservationData data={reservation} />
          </div>
        );
      })}
    </div>
  );
}
