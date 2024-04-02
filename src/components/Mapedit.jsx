import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [geojsonStages, setGeojsonStages] = useState([]);

  useEffect(() => {
    const initializedMap = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=xKjZOaVZ2HxoGN69QIM8",
      center: [0, 0],
      zoom: 2,
    });

    setMap(initializedMap);

    initializedMap.on("load", () => {
      initializedMap.addSource("polygon", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [],
          },
        },
      });

      initializedMap.addLayer({
        id: "polygon",
        type: "fill",
        source: "polygon",
        layout: {},
        paint: {
          "fill-color": "#088",
          "fill-opacity": 0.5,
        },
      });

      initializedMap.on("click", (e) => {
        const coordinates = e.lngLat.toArray();
        setSelectedPoints((prevPoints) => [...prevPoints, coordinates]);
      });
    });

    return () => initializedMap.remove();
  }, []);

  useEffect(() => {
    if (selectedPoints.length >= 2) {
      const startPoint = selectedPoints[selectedPoints.length - 2];
      const endPoint = selectedPoints[selectedPoints.length - 1];
      const distanceGeojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [startPoint, endPoint],
        },
      };
      setGeojsonStages((prevStages) => [...prevStages, distanceGeojson]);
    }
  }, [selectedPoints]);

  useEffect(() => {
    if (selectedPoints.length >= 3) {
      const polygonCoordinates = selectedPoints
        .concat([selectedPoints[0]])
        .map((point) => [point[0], point[1]]);
      const areaGeojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [polygonCoordinates],
        },
      };
      setGeojsonStages((prevStages) => [...prevStages, areaGeojson]);
    }
  }, [selectedPoints]);

  const downloadGeoJson = () => {
    const data = JSON.stringify(geojsonStages, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "geojson_data.geojson";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  useEffect(() => {
    console.log("GeoJSON Stages:", geojsonStages);

    selectedPoints.forEach((point, index) => {
      const sourceId = `point-${index}`;
      const layerId = `point-layer-${index}`;

      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Point",
              coordinates: point,
            },
          },
        });
      }

      if (!map.getLayer(layerId)) {
        map.addLayer({
          id: layerId,
          type: "circle",
          source: sourceId,
          paint: {
            "circle-radius": 6,
            "circle-color": "#f00",
          },
        });
      }
    });
  }, [map, selectedPoints, geojsonStages]);

  return (
    <>
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100vh", position: "relative" }}
      />
      <div
        className="absolute bottom-5 right-5 hover:animate-bounce bg-gradient-to-r from-purple-700 to-pink-500 text-white rounded-md px-4 py-2 shadow-md hover:shadow-lg cursor-pointer"
        onClick={downloadGeoJson}
      >
        Download GeoJson
      </div>
    </>
  );
};

export default MapComponent;
