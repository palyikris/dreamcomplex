import styles from "./page.module.css";

export default function PicSlide(props) {
  return (
    <div className={styles.picContainer}>
      <div className={styles.caption}>
        <p>Dream House</p>
      </div>
      <div className={styles.picWindow}>
        <div className={styles.pics}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
