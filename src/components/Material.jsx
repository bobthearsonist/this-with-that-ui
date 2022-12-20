import React from 'react';

export default function Material({ material, key, onInfoSelect }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col" key={key}>
          {material.Name}
        </div>
        <div className="col" key={key + 'button'}>
          <button
            type="button"
            className="btn-outline-secondary btn-sm"
            onClick={() => onInfoSelect(material)}
          >
            {'info'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
