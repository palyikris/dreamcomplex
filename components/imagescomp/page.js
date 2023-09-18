"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function ImagesComponentForApartmans(props) {
  let { startingNum, nOfChildren } = props;
  let imagesRef = useRef();
  let [currImageNumber, setCurrImageNumber] = useState(1);
  let [currImageNumberForDisplay, setCurrImageNumberForDisplay] = useState(1);
  let router = useRouter();

  function NextImage() {
    if (currImageNumberForDisplay === nOfChildren) {
      setCurrImageNumber(startingNum);
      setCurrImageNumberForDisplay(startingNum);
    } else {
      setCurrImageNumber(num => num - 1);
      setCurrImageNumberForDisplay(num => num + 1);
    }
  }

  function PrevImage() {
    if (currImageNumberForDisplay === startingNum) {
      setCurrImageNumber(startingNum - (nOfChildren - 1));
      setCurrImageNumberForDisplay(nOfChildren);
    } else {
      setCurrImageNumber(num => num + 1);
      setCurrImageNumberForDisplay(num => num - 1);
    }
  }

  if (imagesRef.current != undefined) {
    imagesRef.current.style.marginLeft = currImageNumber * 200 + "%";
  }
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <button
          onClick={() => {
            router.push("/reservation");
          }}
        >
          Vissza
        </button>
      </div>
      <div className={styles.numberDisplay}>
        <p>
          {currImageNumberForDisplay} / {nOfChildren}
        </p>
      </div>
      <div className={styles.handles}>
        <button onClick={PrevImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={NextImage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className={styles.window}>
        <div className={styles.images} ref={imagesRef}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
