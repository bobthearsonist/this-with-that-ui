import React, { useState, useEffect } from 'react';

export default function Materials(props) {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    function loadMaterials() {
      setMaterials(localStorage.getItem('materialsData'));
    }
  });

  return (
    <React.Fragment>
      <div>{materials.length} Materials</div>
    </React.Fragment>
  );
}
