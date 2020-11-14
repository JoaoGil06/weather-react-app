import React, { useCallback } from "react";

import { useLatLng } from "../../context/City";

import Navbar from "../../components/Navbar";

import { Container } from "./styles";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "98.5vw",
  height: "86vh",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries = ["places"];

const Map = () => {
  const { latLng, setLatLng } = useLatLng();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const center = {
    lat: latLng.lat,
    lng: latLng.lng,
  };

  const handleMapClick = useCallback((event) => {
    setLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });

    // Adicionar o history para mandar para o forecast
  }, []);

  if (loadError) return "Erro ao carregar o mapa";
  if (!isLoaded) return "A Carregar...";

  return (
    <Container>
      <Navbar />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={handleMapClick}
      >
        <Marker position={{ lat: latLng.lat, lng: latLng.lng }} />
      </GoogleMap>
    </Container>
  );
};

export default Map;
