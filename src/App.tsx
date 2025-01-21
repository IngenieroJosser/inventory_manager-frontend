import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthLogin from './page/AuthLogin';
import AuthRegister from './page/AuthRegister';
import NotFound from './page/NotFound';
import InventoryPage from './page/InventoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
