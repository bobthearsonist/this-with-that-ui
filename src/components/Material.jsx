import React from 'react';
import { MaterialInfo } from './MaterialInfo';
import { useNavigate } from 'react-router-dom';

export default function Material({ material, key }) {
  const navigate = useNavigate();

  const onInfoSelect = (material) => {
    navigate('/material/' + material.Name + '/info');
  };
  const onMsdsSelect = (material) => {};
  const onOrderSelect = (material) => {};

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
              onClick={() => onMsdsSelect(material)}
            >
              {'msds'}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              onClick={() => onOrderSelect(material)}
            >
              {'order'}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
