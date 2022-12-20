import React from 'react';

export default function Material({ name, key, msds_id, onItemSelect }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col" key={key}>
          {name}
        </div>
        <div className="col" key={key + msds_id}>
          <button
            type="button"
            className="btn-outline-secondary btn-sm"
            onClick={() => onItemSelect()}
          >
            {'info'}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
