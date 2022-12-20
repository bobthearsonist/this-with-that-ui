import React from 'react';
import Material from './Material';

export default function Materials(props) {
  const handleInfoSelect = (material) => {
    console.log('handleItemSelect', material);
  };

  return (
    <div className="container-fluid">
      {props.data.map((material) => {
        return (
          <Material
            material={material}
            key={material.Name}
            onInfoSelect={handleInfoSelect}
          />
        );
      })}
    </div>
  );
}
