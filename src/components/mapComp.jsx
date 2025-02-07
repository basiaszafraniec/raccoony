import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/map.css";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import { useSearchParams } from "react-router-dom";

export default function MapComponent() {
  const [locations, setLocations] = useState([]);
  const [searchParams, setSearchParams] = useState(null);
  // const [searchParams] = useSearchParams();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params); // update state with params
  }, []);

  useEffect(() => {
    try {

      fetch("/locations.kml")
        .then(response => {
          if (!response.ok) throw new Error("Failed to load KML file");
          return response.text();
        })
        .then(kmlText => {

          const parser = new DOMParser();
          const kmlDoc = parser.parseFromString(kmlText, "application/xml");
          const placemarks = kmlDoc.getElementsByTagName("Placemark");

          const parsedLocations = Array.from(placemarks)
            .map(placemark => {
              const name = placemark.getElementsByTagName("name")[0]?.textContent;
              const coords = placemark.getElementsByTagName("coordinates")[0]?.textContent?.trim();
              if (!coords) return null;

              const [lng, lat] = coords.split(",").map(coord => parseFloat(coord.trim()));
              if (isNaN(lat) || isNaN(lng)) return null;

              return { name, lat, lng };
            })
            .filter(Boolean);

          setLocations(parsedLocations);
        })
        .catch(error => {
          console.error("Error fetching KML file:", error);
          try {
            // console.timeEnd("fetchKML"); // make sure timer stops even if there's an error
          } catch (e) { }
        });
    } catch (e) {
      console.error("Error in fetchKML:", e);
    }
  }, []);

  return (
    <MapContainer id="map" center={[51.5074, -0.1278]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}