"use client";

import ApartmentPageComponent from "@/components/apartmentpage/blueprint";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";

export default function LellePage() {
  let router = useRouter();

  return <ApartmentPageComponent />;
}
