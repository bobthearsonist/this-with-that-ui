import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Relationships from './components/Relationships';
import Materials from './components/Materials';
import { useEffect, useState } from 'react';
import { MaterialInfo } from './components/MaterialInfo';

function getMaterials(setMaterials) {
  fetch('materials.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      setMaterials(myJson);
    });
}

function App() {
  // the root app is a functional component so we can use hooks
  // put the state here for now even though its "bad"
  const [materials, setMaterials] = useState([]);
  // this should only run once, when the app is first loaded
  useEffect(
    () => localStorage.setItem('materials', getMaterials(setMaterials)),
    [] // this prevents a circular trigger
  );

  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/materials" />} />
            <Route path="/materials" element={<Materials data={materials} />} />
            <Route path="/relationships" element={<Relationships />} />
            <Route
              path="/material/:materialName/info"
              element={<MaterialInfo />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
