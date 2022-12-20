import React from 'react';
import { useLocation } from 'react-router-dom';

export const MaterialInfo = () => {
  //somewhat confusing, that to get state you use location when passing it through the router...
  //   const [material, setMaterial] = useState();
  const location = useLocation();
  const material = location.state;

  return (
    <React.Fragment>
      <div>{material.Name} Info</div>
    </React.Fragment>
  );
};
