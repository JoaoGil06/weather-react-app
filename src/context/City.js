import React, { createContext, useState, useContext } from "react";

export const CityContext = createContext();

export default function CityProvider({ children }) {
  const [city, setCity] = useState("teste");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
}

//Criar o hook
export function useCity() {
  const context = useContext(CityContext);
  const { city, setCity } = context;

  return { city, setCity };
}
