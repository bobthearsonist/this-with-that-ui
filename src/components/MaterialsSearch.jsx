import React from 'react';

const MaterialsSearch = ({ handleChange, handleSearch }) => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={handleSearch} // if it gets set to undefined, it will be an uncontrolled component
        onChange={handleChange}
      />
    </form>
  );
};

export default MaterialsSearch;
