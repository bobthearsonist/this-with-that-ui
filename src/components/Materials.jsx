import React, { useState, useEffect } from 'react';
import Material from './Material';
import MaterialsSearch from './MaterialsSearch';

export default function Materials(props) {
  const materials = props.data;

  const [search, setSearch] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  useEffect(() => {
    function filterMaterials(materials) {
      return materials.filter((material) => {
        const { MSDS, ...searchable } = material;
        return Object.values(searchable).some((value) =>
          value.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    if (!search && !materials) {
      setFilteredMaterials(materials);
      return;
    }

    setFilteredMaterials(filterMaterials(materials));
  }, [materials, search]);

  const handleSearch = (searchString) => {
    console.log('handleSearch', search);
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log('handleChange', event.target.value);
    setSearch(event.target.value);
    if (!event.target.value) handleSearch();
  };

  return (
    <React.Fragment>
      <MaterialsSearch
        handleChange={handleChange}
        handleSubmit={handleSearch}
      />
      <div className="container-fluid">
        {filteredMaterials.map((material) => {
          return <Material material={material} key={material.Name} />;
        })}
      </div>
    </React.Fragment>
  );
}
