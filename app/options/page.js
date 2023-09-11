"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/footer/page";
import { useRouter } from "next/navigation";

export default function OptionsPage() {
  let router = useRouter();

  return (
    <div className={styles.container}>
      <Topnav></Topnav>
      <div className={styles.heroSections}>
        <div className={styles.heroElements}>
          <h1>
            A <span>Dream</span> komplexumok <span>3</span> helyszínt kínál
          </h1>
          <Link href={"/reservation"}>Foglalj nálunk már most!</Link>
        </div>
        <div className={styles.apartmans}>
          <button
            className={styles.apartman}
            onClick={() => {
              router.push("/options#dreamhouse");
            }}
          >
            <h1>Dream House</h1>
            <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
          </button>
          <button
            className={styles.apartman}
            onClick={() => {
              router.push("/options#dreamaparman");
            }}
          >
            <h1>Dream Apartman</h1>
            <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
          </button>
          <button
            className={styles.apartman}
            onClick={() => {
              router.push("/options#dreamtopart");
            }}
          >
            <h1>Dream Tópart</h1>
            <p>Balatonlellén, a kertből kilépve már a part vár.</p>
          </button>
        </div>
      </div>
      <div className={styles.apartmansDetailed}>
        <div className={styles.apartmanDetailed} id={styles.dreamhouse}>
          <div className={styles.pic}>
            <div className={styles.caption}>
              <p>Dream House</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
