"use client";

import { fetchApartmans } from "@/lib/ApartmanOperations";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CalendarComponent from "../calendar/Calendar";

export default function ReservationPageComponent() {
  let pathName = usePathname();
  let pathData = pathName.split("/");
  let [apartmans, setApartmans] = useState([]);
  let [loading, setLoading] = useState(true);
  let router = useRouter();

  useEffect(() => {
    fetchApartmans(pathData[pathData.length - 1])
      .then((apartmans) => {
        console.log(apartmans);
        setApartmans(apartmans);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {apartmans.map((apartman, i) => {
        return (
          <div key={i}>
            <p>{apartman.name}</p>
            <p>{apartman.area}</p>
            <p>{apartman.people}</p>
            <div>
              {apartman.rooms.map((room, i) => {
                return (
                  <div key={i}>
                    <p>{room}</p>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => {
                router.push(
                  `/reservation/${pathData[pathData.length - 1]}/${apartman.id}`
                );
              }}
            >
              foglalás
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
