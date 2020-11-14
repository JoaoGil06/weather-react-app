import React, { createContext, useState, useContext } from "react";

export const LatLngContext = createContext();

export default function LatLngProvider({ children }) {
  const [latLng, setLatLng] = useState({ lat: "", lng: "" });

  if (typeof latLng.lat === "string") {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatLng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  return (
    <LatLngContext.Provider value={{ latLng, setLatLng }}>
      {children}
    </LatLngContext.Provider>
  );
}

//Criar o hook
export function useLatLng() {
  const context = useContext(LatLngContext);
  const { latLng, setLatLng } = context;

  return { latLng, setLatLng };
}
