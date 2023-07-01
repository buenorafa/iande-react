"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function Map() {
  const customIcon = new Icon({
    iconUrl: "./location-icon.png",
    iconSize: [38, 38],
  });

  // Estado para armazenar os dados dos marcadores
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const db = "https://my-json-server.typicode.com/buenorafa/iande-db/pins";
    // PEGA OS PINS DO JSON SERVER
    fetch(db)
      .then((res) => res.json())
      .then((data) => {
        setPins(data); // Armazena os dados dos marcadores no estado
      })
      .catch((error) => {
        console.log("Ocorreu um erro:", error);
      });
  }, []);

  return (
    <MapContainer
      center={[-7.1351608999508835, -34.873484685903584]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Renderização dos marcadores */}
      {pins.map((pin) => (
        <Marker key={pin.location} position={pin.location} icon={customIcon}>
          <Popup>
            <h4 className="font-bold">{pin.title}</h4>
            <p>{pin.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
