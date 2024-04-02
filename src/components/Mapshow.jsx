import React, { useEffect } from "react";
import maplibregl from "maplibre-gl";

const MapComponent2 = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=xKjZOaVZ2HxoGN69QIM8",
      center: [0, 0],
      zoom: 1,
    });

    const fetchData = async () => {
      try {
        const response = await fetch("geojsondata.geojson");
        const data = await response.json();
        map.on("load", () => {
          map.addSource("schools", {
            type: "geojson",
            data: data,
          });

          map.addLayer({
            id: "schools-layer",
            type: "fill", // Changed layer type to "fill"
            source: "schools",
            paint: {
              "fill-color": "red", // Fill color
              "fill-opacity": 0.5, // Fill opacity
            },
          });
        });
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      }
    };

    fetchData();

    // Cleanup function to remove the map instance when component unmounts
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Render map container
  return <div id="map" style={{ width: "100%", height: "600px" }}></div>;
};

export default MapComponent2;
