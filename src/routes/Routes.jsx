import {Routes, Route} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import About from '../components/Footer/pages/About';
import Privacy from '../components/Footer/pages/Privacy';
import Terms from '../components/Footer/pages/Terms';
import WorkWithUs from '../components/Footer/pages/WorkWIthUs';

export default function AppRoutes() {
    return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Routes>
    );
}