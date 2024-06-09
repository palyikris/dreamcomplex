import { SocialIcon } from "react-social-icons";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>Valami logo</div>
        <div className={styles.logoDescription}>
          <h1>Dream Komplexumok</h1>
          <p>Nagyon örülünk, hogy minket választ a nyaralásához!</p>
        </div>
      </div>
      <div className={styles.else}>
        <div className={styles.documents}>
          <p>Példa valami</p>
          <p>Másik példa</p>
        </div>
        <div className={styles.social}>
          <p>Kérjük érdeklődjön telefonon, vagy email-ben:</p>
          <div className={styles.socialApps}>
            <p>+36 70 373 3772</p>
            <p>kerekesnetollar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
