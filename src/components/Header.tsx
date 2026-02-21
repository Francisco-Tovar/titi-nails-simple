import React from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">Titi's Nails</div>

        <nav className="nav">
          <Link to="/">Galería</Link>
          <Link to="/about">Sobre Mí</Link> {/* <-- Nuevo enlace */}
          <Link to="/appointments">Agenda una cita</Link>
        </nav>

        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;
