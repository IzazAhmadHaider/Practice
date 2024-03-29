import React, { useEffect } from 'react';
import maplibregl from 'maplibre-gl';

const MapComponent = () => {
    // useEffect hook to run code after the component mounts
    useEffect(() => {
        // Create a new MapLibre map instance
        const map = new maplibregl.Map({
            container: 'map',
            style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json', 
            center: [0, 0],
            zoom: 10
        });

        // Fetch GeoJSON data for schools
        const fetchData = async () => {
            try {
                const response = await fetch('schoolslist.geojson');
                const data = await response.json();

                // Once data is fetched, add it as a source and layer to the map
                map.on('load', () => {
                    map.addSource('schools', {
                        type: 'geojson',
                        data: data
                    });

                    map.addLayer({
                        id: 'schools-layer',
                        type: 'circle',
                        source: 'schools',
                        paint: {
                            'circle-radius': 6,
                            'circle-color': 'red',
                            'circle-opacity': 0.8
                        }
                    });
                });
            } catch (error) {
                console.error('Error loading GeoJSON:', error);
            }
        };

        fetchData();

        // Cleanup function to remove the map instance when component unmounts
        return () => {
            map.remove();
        };
    }, []); // Empty dependency array ensures this effect runs only once

    // Render map container
    return <div id="map" style={{ width: '100%', height: '600px' }}></div>;
};

export default MapComponent;
