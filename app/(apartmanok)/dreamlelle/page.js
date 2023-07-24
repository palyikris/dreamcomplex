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
          <h1>
            {apartmanName} Apartmanok
          </h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            perferendis odit, aperiam, recusandae laborum ad architecto
            molestias harum aliquid incidunt pariatur culpa est voluptatibus
            quos veniam nemo tenetur voluptatem quia?
          </h4>
        </div>
        <div className={styles.heroImg} />
      </div>
    </ApartmentPageComponent>
  );
}
