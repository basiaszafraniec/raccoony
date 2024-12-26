import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../styles/map.css";

export default function MapComponent() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch and parse the KML file
    fetch("/locations.kml")
      .then(response => response.text())
      .then(kmlText => {
        const parser = new DOMParser();
        const kmlDoc = parser.parseFromString(kmlText, "application/xml");
        const placemarks = kmlDoc.getElementsByTagName("Placemark");
        const parsedLocations = Array.from(placemarks).map(placemark => {
          const name = placemark.getElementsByTagName("name")[0]?.textContent;
          const coords = placemark.getElementsByTagName("coordinates")[0]?.textContent.trim();
          
          if (!coords) {
            // Skip Placemark if no coordinates are found
            return null;
          }

          // Handle coordinates safely, ensuring there's valid data
          const [lng, lat] = coords.split(",").map(coord => parseFloat(coord.trim()));
          
          if (isNaN(lat) || isNaN(lng)) {
            // Skip if coordinates are not valid
            return null;
          }

          return { name, lat, lng };
        }).filter(Boolean); // Filter out any null values

        setLocations(parsedLocations);
      })
      .catch(error => {
        console.error("Error fetching KML file:", error);
      });
  }, []);

  return (
    <MapContainer id="map" center={[56.1629, 10.2039]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
