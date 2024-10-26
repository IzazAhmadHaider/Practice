import React, { useState } from 'react';

const UpdateObject = () => {
  const [originalObject, setOriginalObject] = useState({
    token: "token",
    uid: "UID",
    address_id: "123",
    firmenname: null,
    ansprechpartner: null,
  });

  const [updatedObject, setUpdatedObject] = useState(null);
  const updateObject = () => {
    const secondObject = {
      address_id: "456",
      firmenname: "izzaza",
    };
    const updatedObj = { ...originalObject }; 
    Object.keys(secondObject).forEach((key) => {
      if (updatedObj.hasOwnProperty(key)) {
        updatedObj[key] = secondObject[key];
      }
    });
    setUpdatedObject(updatedObj);
  };

  return (
    <div>
      <button onClick={updateObject}>Update Object</button>
      {originalObject && (
        <div>
          <h2>Original Object:</h2>
          <pre>{JSON.stringify(originalObject, null, 2)}</pre>
        </div>
      )}
      {updatedObject && (
        <div>
          <h2>Updated Object:</h2>
          <pre>{JSON.stringify(updatedObject, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UpdateObject;
