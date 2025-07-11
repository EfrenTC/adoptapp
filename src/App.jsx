
import React from 'react';
import './App.css'; 
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Donation from  './pages/Donation/Donation';
import Slider from './components/Slider/Slider';

function App() {
 
 return (
    <>
    
    <Header></Header>

    <AppRoutes>
    
    </AppRoutes>
    <Slider></Slider>
    <Footer></Footer>
    </>
  );
}

export default App;

