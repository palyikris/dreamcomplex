import { createContext, useContext, useState } from "react";

export const ApartmanContext = createContext({
  isDreamHouseOpen: false,
  isDreamApartmanOpen: false,
  isDreamTopartOpen: false,
  setIsDreamHouseOpen: () => {},
  setIsDreamApartmanOpen: () => {},
  setIsDreamTopartOpen: () => {}
});

export default function GlobalContextProvider({ children }) {
  let [isDreamHouseOpen, setIsDreamHouseOpen] = useState(false);
  let [isDreamApartmanOpen, setIsDreamApartmanOpen] = useState(false);
  let [isDreamTopartOpen, setIsDreamTopartOpen] = useState(false);

  return (
    <ApartmanContext.Provider
      value={{
        isDreamHouseOpen: isDreamHouseOpen,
        isDreamApartmanOpen: isDreamApartmanOpen,
        isDreamTopartOpen: isDreamTopartOpen,
        setIsDreamHouseOpen: setIsDreamHouseOpen,
        setIsDreamApartmanOpen: setIsDreamApartmanOpen,
        setIsDreamTopartOpen: setIsDreamTopartOpen
      }}
    >
      {children}
    </ApartmanContext.Provider>
  );
}
