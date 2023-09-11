import { SocialIcon } from "react-social-icons";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>Valami logo</div>
        <div className={styles.logoDescription}>
          <h1>Dream Konplexumok</h1>
          <p>Nagyon örülünk, hogy minket választ a nyaralásához!</p>
        </div>
      </div>
      <div className={styles.else}>
        <div className={styles.documents}>
          <p>Példa valami</p>
          <p>Másik példa</p>
        </div>
        <div className={styles.social}>
          <p>Kövess minket!</p>
          <div className={styles.socialApps}>
            <SocialIcon
              url="https://twitter.com/"
              fgColor="#daa06d"
              bgColor="#FFFFFF"
            />
            <SocialIcon
              url="https://facebook.com/"
              fgColor="#daa06d"
              bgColor="#FFFFFF"
            />
            <SocialIcon
              url="https://instagram.com/"
              fgColor="#daa06d"
              bgColor="#FFFFFF"
            />
            <SocialIcon
              url="https://tiktok.com/"
              fgColor="#daa06d"
              bgColor="#FFFFFF"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
