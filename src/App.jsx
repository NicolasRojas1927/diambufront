import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainMenu from './MainMenu';  // Ajusta la ruta según tu proyecto
import Login from './Login';        // Importa el componente de Login
import Register from './Register';
import Contact from './Contact';
import ForgetPassword from './ForgetPassword';
import ParkDetail from './ParkDetail';
import Admin from './admin';
import Administrator from './administrator';

import Dashboard from './dashboard/Dashboard';

function App() {
  // Componente de Ruta Protegida
  function ProtectedRoute({ children }) {
    const token = localStorage.getItem('token');
    return token ? children : <Navigate to="/login" />;
  }
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/login" element={<Login />} />
          {/* Otras rutas, como Registro o Contáctenos */}
          <Route path="/registro" element={<Register />} />
          <Route path="/contactenos" element={<Contact />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/parque" element={<ParkDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/administrator" element={<Administrator />} />


          {/* Ruta Protegida para el Dashboard */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/*" element={<MainMenu />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
