import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu';  // Ajusta la ruta según tu proyecto
import Login from './Login';        // Importa el componente de Login
import Register from './Register';
import Contact from './Contact';

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/login" element={<Login />} />
        {/* Otras rutas, como Registro o Contáctenos */}
        <Route path="/registro" element={<Register />} />
        <Route path="/contactenos" element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
