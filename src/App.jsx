import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Relationships from './components/Relationships';
import Materials from './components/Materials';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/materials" />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/relationships" element={<Relationships />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
