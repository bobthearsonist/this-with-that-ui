import React from 'react';

export default function Material({ name, key }) {
  return (
    <div className="container">
      <div className="row" key={key}>
        {name}
      </div>
    </div>
  );
}
