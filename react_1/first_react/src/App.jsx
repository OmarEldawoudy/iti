import { useState } from 'react';
import './App.css';
import Home from './assets/component/Home/Home.jsx';
import Navbar from './assets/component/Navbar/Navbar.jsx';
import Footer from './assets/component/Footer/Footer.jsx';
import Hero from './assets/component/Hero/Hero.jsx';
function App() {
  return (
    <>
      <h1>Hello </h1>
      <Navbar />
      <Home />
      <Hero />
      <Footer/>
    </>
  )
}

export default App