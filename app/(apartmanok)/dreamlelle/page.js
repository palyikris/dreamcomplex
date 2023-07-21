"use client";

import ApartmentPageComponent from "@/components/apartmentpage/blueprint";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

export default function LellePage() {
  let path = usePathname();
  path = path.split("/");
  let apartmanName = path[path.length - 1];
  apartmanName = apartmanName.charAt(0).toUpperCase() + apartmanName.slice(1);

  return (
    <ApartmentPageComponent>
      <div className={styles.heroSection}>
        <div className={styles.title}>
          <p>{apartmanName} Foglalás</p>
        </div>
      </div>
      <div className={styles.bg}></div>
    </ApartmentPageComponent>
  );
}
