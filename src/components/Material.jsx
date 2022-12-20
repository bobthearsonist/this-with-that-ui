import React from 'react';

export default function Material({ material, key, onInfoSelect }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col" key={key}>
          {material.Name}
        </div>
        <div className="col" key={key + 'button'}>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => onInfoSelect(material)}
            >
              {'info'}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => onInfoSelect(material)}
            >
              {'msds'}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => onInfoSelect(material)}
            >
              {'order'}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
