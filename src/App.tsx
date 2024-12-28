import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PowerSolutions from './pages/services/PowerSolutions';
import SolarEPC from './pages/services/SolarEPC';
import ElectricalEPC from './pages/services/ElectricalEPC';
import EnergyLighting from './pages/services/EnergyLighting';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/power-solutions" element={<PowerSolutions />} />
          <Route path="/services/solar-epc" element={<SolarEPC />} />
          <Route path="/services/electrical-epc" element={<ElectricalEPC />} />
          <Route path="/services/energy-lighting" element={<EnergyLighting />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;