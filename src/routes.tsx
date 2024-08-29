import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LaDolceVitaTrattoria from './pages/La_Dolce_Vita_Trattoria';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/italiano" element={<LaDolceVitaTrattoria />} />
  </Routes>
);

export default RoutesConfig;
