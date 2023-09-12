"use client";

import Topnav from "@/components/topnav/page";
import styles from "./page.module.css";
import Link from "next/link";
import Footer from "@/components/footer/page";
import { useRouter } from "next/navigation";
import PicSlide from "./../../components/picSlide/page";

export default function OptionsPage() {
  let router = useRouter();

  return (
    <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <div className={styles.heroElements}>
          <h1>
            3 <span>Dream</span> szállás közül választhatsz
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
          <div className={styles.intro}>
            <PicSlide>
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
              <div className={styles.pic} />
            </PicSlide>
            <div className={styles.description}>
              <h1>Dream House</h1>
              <div className={styles.sep} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quisquam est dolorum maiores aperiam pariatur. Id ratione
                nesciunt soluta magnam, sunt ipsa commodi possimus? Neque
                deserunt rerum fuga dolorum eligendi!
              </p>
              <button>Foglalás</button>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.services}>
              <div className={styles.service}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Esztétikus modern szobák</p>
              </div>
              <div className={styles.service} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
