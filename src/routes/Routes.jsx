import {Routes, Route} from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import About from '../components/Footer/pages/About';
import Privacy from '../components/Footer/pages/Privacy';
import Terms from '../components/Footer/pages/Terms';
import WorkWithUs from '../components/Footer/pages/WorkWIthUs';
import CardsPage from '../pages/CardsPage';
import Contact from '../pages/Contact/Contact';
import Donation from '../pages/Donation/Donation';
import Historias from '../components/Historias/Historias'; 
import Tips from '../pages/Tips/Tips';

export default function AppRoutes() {
    return (
    <Routes>
        <Route path="/adopcion" element={<CardsPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/donar" element={<Donation />} />
        <Route path="/historias" element={<Historias />} /> 
        <Route path="/consejos" element={<Tips />} />
      </Routes>
    );
}