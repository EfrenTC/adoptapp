
import React from 'react';
import './App.css'; 
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';


function App() {
 
 return (
    <>
    
    <Header></Header>

    <AppRoutes>
    
    </AppRoutes>

    <Footer></Footer>
    </>
  );
}

export default App;

