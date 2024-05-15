import React, { useState } from 'react';
import shp from 'shpjs'; // Import the shpjs library

function Shapefiletogeojson() {
  const [geojson, setGeojson] = useState(null);

  // Function to handle file upload
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Check if the uploaded file is a zip file
    if (file.type !== 'application/zip') {
      alert('Please upload a zip file.');
      return;
    }

    // Use shpjs library to convert shapefile to GeoJSON
    shp(file)
      .then(function (geojson) {
        setGeojson(geojson);
      })
      .catch(function (error) {
        console.error(error);
        alert('Error converting shapefile to GeoJSON.');
      });
  };

  // Function to handle download of GeoJSON
  const handleDownloadGeojson = () => {
    if (!geojson) return;
    const data = JSON.stringify(geojson);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.geojson';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileUpload} />
      {geojson && (
        <div>
          <p>Shapefile converted to GeoJSON successfully!</p>
          <button onClick={handleDownloadGeojson}>Download GeoJSON</button>
        </div>
      )}
    </div>
  );
}

export default Shapefiletogeojson;

