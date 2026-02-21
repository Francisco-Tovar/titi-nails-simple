import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Appointment from "./components/Appointment";
import AdminPanel from "./components/AdminPanel";
import About from "./components/About"; // <-- 1. IMPORTANTE: Importar el componente

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Gallery />} />
          {/* 2. IMPORTANTE: Aquí es donde registramos la ruta para que no dé error */}
          <Route path="/about" element={<About />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
