import { Routes, Route } from 'react-router-dom';
import { Users } from './pages/Users';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Home } from './pages/Home';
import DashboardLayout from './layout/DashboardLayout';
import { Activities } from './pages/Activities';
import { Locations } from './pages/Locations';
import { Parks } from './pages/Parks';
import { Ratings } from './pages/Ratings';
import { Contacts } from './pages/Contacts';


function Dashboard() {
    return (
        <div>
            {/* Menú Lateral y Outlet aquí */}
            <Routes>
                <Route element={<DashboardLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/actividades" element={<Activities />} />
                    <Route path="/localidades" element={<Locations />} />
                    <Route path="/parques" element={<Parks />} />
                    <Route path="/calificaciones" element={<Ratings />} />
                    <Route path="/usuarios" element={<Users />} />
                    <Route path="/mensajes" element={<Contacts />} />
                    <Route path="/reportes" element={<Reports />} />
                    <Route path="/Ajustes" element={<Settings />} />
                    <Route path="/*" element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Dashboard;
