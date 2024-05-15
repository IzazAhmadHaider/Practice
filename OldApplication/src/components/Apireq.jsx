import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Apireq = () => {
  const [responseStatus, setResponseStatus] = useState(null);

  useEffect(() => {
    const changeAddress = async () => {
      try {
        const response = await axios.post(
          'https://api.hiwifipro.com/giga/fiber/app/v1/change/address',
          {
            token: "PXnGkuc8B2MvrFCg",
            uid: "6FB2C96A-A251-42A9-A65D-0C8DF248D679",
            address_id: "12009",
            anrede: "Herr",
            firmenname: null,
            ansprechpartner: null,
            vorname: "Izazzzzzzzzzzzzzzzz",
            nachname: "Ahmad",
            strasse: "1. Dwarsweg",
            hausnummer: "16",
            plz: "26607",
            ort: "Aurich",
            email: "izaz.ahmad@wifi-connect.eu",
          }
        );
        setResponseStatus(response.status);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    changeAddress();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, []);

  return (
    <div>
      <h1>Response Status: {responseStatus}</h1>
    </div>
  );
};

export default Apireq;
