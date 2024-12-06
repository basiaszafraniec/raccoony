import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-kml';
import "../styles/map.css";

const MapComponent = () => {
  useEffect(() => {
    // Reset map if already initialized
    const container = L.DomUtil.get('map');
    if (container !== null) {
      container._leaflet_id = null; // Reset map instance
    }

    // Initialize the map
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Load the KML file
    fetch('/dumpster-data.kml')
      .then((response) => response.text())
      .then((kmlText) => {
        const parser = new DOMParser();
        const kml = parser.parseFromString(kmlText, 'text/xml');
        const kmlLayer = new L.KML(kml, { async: true });

        // Adjust map bounds once KML data is loaded
        kmlLayer.on('loaded', () => {
          const bounds = kmlLayer.getBounds();
          if (bounds.isValid()) {
            map.fitBounds(bounds);
          } else {
            console.warn("KML bounds are not valid. Check your data.");
          }
        });

        map.addLayer(kmlLayer);
      })
      .catch((error) => console.error('Error loading KML file:', error));

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map"></div>
  );
};

export default MapComponent;
