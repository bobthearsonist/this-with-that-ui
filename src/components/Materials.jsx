import React from 'react';
import Material from './Material';

export default function Materials(props) {
  return (
    <React.Fragment>
      <div>{props.data.length} Materials</div>
      <div className="col">
        {props.data.map((material) => {
          return <Material name={material.Name} key={material.Name} />;
        })}
      </div>
    </React.Fragment>
  );
}
