import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const MaterialInfo = () => {
  const navigate = useNavigate();

  //somewhat confusing, that to get state you use location when passing it through the router...
  //   const [material, setMaterial] = useState();
  const location = useLocation();
  const material = location.state;

  const handleBackToMaterials = () => {
    navigate('/materials');
  };

  Object.keys(material).forEach((key, index) => {
    console.log(key, material[key]);
  });

  return (
    <React.Fragment>
      <div>{material.Name} Info</div>
      <div className="container-fluid">
        {Object.keys(material).map((key) => {
          return (
            <div className="row" key={key}>
              <div className="col" key="name">
                {key + ':'}
              </div>
              <div className="col" key="val">
                {material[key]}
              </div>
            </div>
          );
        })}
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleBackToMaterials}
        >
          Back to Materials
        </button>
      </div>
    </React.Fragment>
  );
};
