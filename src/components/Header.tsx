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

          <Link to="/about">
            <span className="desktop-text">Sobre Mí</span>
            <span className="mobile-text">Vicky!</span>
          </Link>

          <Link to="/appointments">
            <span className="desktop-text">Agenda una cita</span>
            <span className="mobile-text">Citas!</span>
          </Link>
        </nav>

        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;
