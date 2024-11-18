import { Link, Outlet } from 'react-router-dom';
import { MenuDashboard } from '../components/MenuDashboard';

function DashboardLayout() {
  return (
    <div>
      <MenuDashboard />

      {/* Contenido */}
      <main style={{ padding: '1em', flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
