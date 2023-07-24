import ApartmentPageComponent from "@/components/apartmentpage/blueprint";
import styles from "./style.module.css";

export default function OszodPage() {
  return (
    <ApartmentPageComponent>
      <div className={styles.heroSection}>
        <div className={styles.title}>
          <p>
            {apartmanName} Apartmanok
          </p>
        </div>
      </div>
    </ApartmentPageComponent>
  );
}
