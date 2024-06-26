"use client";

// pagefor: Main page of the Application

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import Topnav from "./../components/topnav/page";
import Footer from "@/components/footer/page";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import Loader from "@/components/loader/page";

export default function Page() {
  let router = useRouter();
  let [trackId, setTrackId] = useState("");

  return (
    <div className={styles.container}>
      <Topnav />
      <div className={styles.heroSections}>
        <Image
          src={"/partdark.jpg"}
          alt="Balaton part"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKUlEQVQ4jZ2Tz0vDQBDGJx"
          priority={true}
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
          className={styles.heroElements}
        >
          <h1>
            <button
              onClick={() => {
                router.push("/auth/login");
              }}
            >
              Dream
            </button>{" "}
            komplexum a Balatonnál
          </h1>
          <Link href="/reservation">Foglald le most a nyárra!</Link>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                  clipRule="evenodd"
                />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
              <p>Pénztárca barát</p>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Könnyű tervezés</p>
            </div>
            <div className={styles.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 00-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 01-.189-.866c0-.298.059-.605.189-.866zm2.023 6.828a.75.75 0 10-1.06-1.06 3.75 3.75 0 01-5.304 0 .75.75 0 00-1.06 1.06 5.25 5.25 0 007.424 0z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Boldog nyaralók</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.detailElement}>
        <div
          className={styles.picContainer}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
          <div className={styles.pic} />
          <div className={styles.helper} />
          <div className={styles.text}>
            <p>Dream Apartman</p>
          </div>
        </div>
        <div className={styles.details}>
          <h1>
            Üdv a <span>Dream</span> komplexumok oldalán!
          </h1>
          <div className={styles.sep} />
          <p>
            A Balaton mindig egy jó választás nyaralásra. Gyere és nézz körül
            nálunk, milyen lehetőséget tudunk kínálni számodra! Balatonlellén 2
            szállás lehetőségünk van, amik nagyon kellemes és pihentető
            nyaralást tudnak kínálni.
          </p>
          <div className={styles.sep} />
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
            onClick={() => {
              router.push("/options");
            }}
          >
            Lehetőségek
          </motion.button>
        </div>
      </div>
      <div className={styles.bigTitle}>
        <div className={styles.titleWrapper}>
          <h1>Lehetőségeink:</h1>
        </div>
        <div
          className={styles.picContainer}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
        >
          <div className={styles.pic} />
          <div className={styles.helper} />
          <div className={styles.text}>
            <p>Dream Tópart</p>
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        {/* <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
        >
          <div className={styles.cardPic} />
          <div className={styles.description}>
            <h1>Dream House</h1>
            <div className={styles.cardDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Egy gyönyörű és hatalmas ház Balatonőszöd partján.</p>
            </div>
            <button
              onClick={() => {
                router.push("/options#dreamHouse");
              }}
            >
              Részletek
            </button>
          </div>
        </motion.div> */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          <div className={styles.cardPic} />
          <div className={styles.description}>
            <h1>Dream Apartman</h1>
            <div className={styles.cardDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Balatonlellén 4 apartmannal is tudunk szolgálni.</p>
            </div>
            <button
              onClick={() => {
                router.push("/options#dreamApartman");
                // prompt: navigating to the dreamApartman section of the Options page
              }}
            >
              Részletek
            </button>
          </div>
        </motion.div>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
        >
          <div className={styles.cardPic1} />
          <div className={styles.description}>
            <h1>Dream Tópart</h1>
            <div className={styles.cardDetails}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Balatonlellén, a kertből kilépve már a part vár.</p>
            </div>
            <button
              onClick={() => {
                router.push("/options#dreamTopart");
              }}
            >
              Részletek
            </button>
          </div>
        </motion.div>
      </div>
      <div className={styles.myReservationRoute}>
        <motion.button
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 25 }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeInOut" }}
          onClick={() => {
            router.push("/#myreservation");
          }}
        >
          Kíváncsi foglalására?
        </motion.button>
      </div>
      <form
        className={styles.myReservation}
        id="myreservation"
        onSubmit={e => {
          e.preventDefault();
          router.push(`/restracker/${trackId}`);
        }}
      >
        <h1>Kíváncsi foglalására?</h1>
        <div>
          <label htmlFor="">Ide írja a kapott kódot:</label>
          <input
            type="text"
            placeholder="A kód..."
            onChange={e => {
              setTrackId(e.target.value);
            }}
            value={trackId}
          />
        </div>
        <button
          type="submit"
          onClick={() => {
            router.push(`/restracker/${trackId}`);
          }}
        >
          Megnézem
        </button>
      </form>
      <Footer />
    </div>
  );
}
