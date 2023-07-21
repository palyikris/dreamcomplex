"use client";

import { reserveApartman } from "@/lib/ApartmanOperations";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ApartmanReservationPage() {
  let path = usePathname();
  path = path.split("/");
  let apartmanName = path[path.length - 2];
  let apartmanNumber = path[path.length - 1];
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [phone, setPhone] = useState();

  return (
    <div>
      <div>
        <label htmlFor="">Foglalás kezdete</label>
        <input
          type="date"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Foglalás vége</label>
        <input
          type="date"
          onChange={(e) => {
            setEndDate(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Név</label>
        <input
          type="text"
          placeholder="Név..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Telefonszám</label>
        <input
          type="text"
          placeholder="Telefonszám..."
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            reserveApartman(
              apartmanName,
              apartmanNumber,
              startDate,
              endDate,
              name,
              email,
              phone
            );
          }}
        >
          foglalás
        </button>
      </div>
    </div>
  );
}
