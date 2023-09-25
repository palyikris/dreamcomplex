"use client";

import { FetchReservationById } from "@/lib/firebase";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReservationData from "@/components/resdata/page";

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
    return <div>loading...</div>;
  }

  if (!data || data === undefined) {
    return <div>vmi hiba történt</div>;
  }

  return (
    <div className={styles.container}>
      {data.map(reservation => {
        console.log(reservation);

        return (
          <div className={styles.container}>
            <ReservationData data={reservation} />
          </div>
        );
      })}
    </div>
  );
}
