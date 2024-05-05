"use client";

import ImagesComponentForApartmans from "@/components/imagescomp/page";
import { usePathname } from "next/navigation";
import styles from "./page.module.css";

export default function ImagesPage() {
  let path = usePathname();

  path = path.split("/");
  let apartmanType = path[path.length - 2];
  let apartmanNumber = parseInt(path[path.length - 1]);

  // if (apartmanType === "dreamhouse") {
  //   if (apartmanNumber === 1) {
  //     return (
  //       <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
  //         <div className={styles.img} />
  //         <div className={styles.img} />
  //         <div className={styles.img} />
  //       </ImagesComponentForApartmans>
  //     );
  //   }
  // }
  if (apartmanType === "dreamapartman") {
    if (apartmanNumber === 1) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 2) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 3) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    } else {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    }
  } else {
    if (apartmanNumber === 1) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    } else if (apartmanNumber === 2) {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    } else {
      return (
        <ImagesComponentForApartmans startingNum={1} nOfChildren={3}>
          <div className={styles.img} />
          <div className={styles.img} />
          <div className={styles.img} />
        </ImagesComponentForApartmans>
      );
    }
  }
}
