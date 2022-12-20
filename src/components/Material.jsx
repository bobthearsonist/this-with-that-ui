import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Material({ material }) {
  const navigate = useNavigate();

  const onInfoSelect = (material) => {
    navigate('/material/' + material.Name + '/info', {
      state: { ...material },
    });
  };
  const onMsdsSelect = (material) => {};
  const onOrderSelect = (material) => {};

  return (
    <React.Fragment>
      <div className="row">
        <div className="col" key={material.Name}>
          {material.Name}
        </div>
        <div className="col" key={material.Name + 'button'}>
          <div
            /* TODO shouldn't be a button group, redundant to info page, but I liked learning the element.*/
            className="btn-group"
            role="group"
            aria-label="Basic example"
          >
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
