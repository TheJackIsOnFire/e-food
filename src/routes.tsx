import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LaDolceVitaTrattoria from './pages/La_Dolce_Vita_Trattoria';
import HiokiSushi from './pages/Hioki Sushi';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/la_dolce_vita_trattoria" element={<LaDolceVitaTrattoria />} />
    <Route path="/hioki_sushi" element={<HiokiSushi />} />
  </Routes>
);

export default RoutesConfig;
