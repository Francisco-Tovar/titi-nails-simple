import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Appointment from "./components/Appointment";
import AdminPanel from "./components/AdminPanel";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
