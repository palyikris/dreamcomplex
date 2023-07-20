"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

export default function Circle(props) {
  let router = useRouter();
  let isCentre = false;

  function animation(element, link) {
    if (element.className.includes("button")) {
      let pos = element.getBoundingClientRect();
      let toGoPosX = window.innerWidth / 2 - pos.left - pos.width / 2;
      let toGoPosY = window.innerHeight / 2 - pos.top - pos.height / 2;
      element.style.transition = "all 2s";
      element.style.position = "absolute";
      element.style.left = pos.left + "px";
      element.style.top = pos.top + "px";
      element.style.zIndex = "9999";
      element.style.backgroundColor = "#00B380";
      element.style.margin = "0";
      element.style.transform = `translate(${toGoPosX}px, ${toGoPosY}px)`;
      let interval = setInterval(() => {
        let pos = element.getBoundingClientRect();
        if (
          parseInt(window.innerWidth / 2 - pos.width / 2) === parseInt(pos.left)
        ) {
          isCentre = true;
          clearInterval(interval);
        }
      }, 500);

      let interval2 = setInterval(() => {
        console.log(isCentre);
        if (isCentre) {
          element.style.borderRadius = "0";
          element.style.left = "0px";
          element.style.transform = `translateX(-${element.style.width * 2})`;
          element.style.top = "0px";
          element.style.width = "100%";
          element.style.height = "100vh";
          clearInterval(interval2);
        }
      }, 100);

      let interval3 = setInterval(() => {
        let pos = element.getBoundingClientRect();
        if (pos.left < 3) {
          router.push(link);
          clearInterval(interval3);
        }
      }, 100);
    }
  }

  return (
    <button
      onClick={e => {
        animation(e.target, props.link);
      }}
      className={styles.button}
    >
      <span>
        {props.text}
      </span>
    </button>
  );
}
