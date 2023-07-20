"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./style.module.css";

export default function ApartmentPageComponent({ children }) {
  let router = useRouter();
  let pathName = usePathname();
  pathName = pathName.replace("/", "");

  return (
    <div className={styles.pageContainerContainer}>
      <div className={styles.pageContainer}>
        <span>Dream Lelle</span>
      </div>
      <div>
        {children}
      </div>
      <button
        onClick={() => {
          router.push(`reservation/${pathName}`);
        }}
      >
        foglalás
      </button>
    </div>
  );
}
