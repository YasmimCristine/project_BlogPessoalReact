import React from 'react';
import Navebar from './components/estaticos/navebar/Navebar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home'
import './App.css';

function App() {
  return (
    <>
    <Navebar/>
    <Home />
    <Footer/>
    </>
  );
}

export default App;
