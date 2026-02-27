import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Appointment from "./components/Appointment";
import AdminPanel from "./components/AdminPanel";
import About from "./components/About";
import Info from "./components/Info"; // <-- Importamos la página de Info
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/info" element={<Info />} />{" "}
            {/* <-- Nueva ruta de Info */}
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
