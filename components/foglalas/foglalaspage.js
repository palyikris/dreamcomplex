"use client";

import { fetchApartmanData } from "@/lib/ApartmanOperations";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default async function ReservationPageComponent() {
  let pathName = usePathname();
  let pathData = pathName.split("/");
  console.log(pathData);
  let response = await fetchApartmanData(pathData[pathData.length - 1], 4);

  return (
    <div>
      <h1>csuma</h1>
    </div>
  );
}
