import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthLogin from './page/AuthLogin';
import AuthRegister from './page/AuthRegister';
import NotFound from './page/NotFound';
import InventoryPage from './page/InventoryPage';
import Dashboard from './page/Dashboard';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PrivateRoute from './PrivateRoute';  // Asegúrate de importar PrivateRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        {/* <Route path="/inventory" element={<InventoryPage />} /> */}
        <Route path="*" element={<NotFound />} />
        
        {/* Protegiendo rutas */}
        <Route 
          path="/dashboard" 
          element={<PrivateRoute element={<Dashboard />} />} // Protegiendo ruta Dashboard
        />
        <Route 
          path="/inventory" 
          element={<PrivateRoute element={<InventoryPage />} />} // Protegiendo ruta InventoryPage
        />
      </Routes>
    </Router>
  );
};

export default App;
