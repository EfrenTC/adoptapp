import React from 'react';
import './App.css'; 
import AppRoutes from './routes/Routes';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (

    <div className="page-wrapper">
      <Header />
      <main className="main-content">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
