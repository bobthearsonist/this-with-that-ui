import React from 'react';
import Material from './Material';

export default function Materials(props) {
  return (
    <div className="container-fluid">
      {props.data.map((material) => {
        return <Material name={material.Name} key={material.Name} />;
      })}
    </div>
  );
}
