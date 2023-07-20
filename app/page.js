import Link from "next/link";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <Link href="/apartments">nyomod</Link>
    </div>
  );
}
