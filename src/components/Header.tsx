import React from "react";
import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        {/* 🌸 Logo emoji gigante y Nombre combinados 🌸 */}
        <Link
          to="/"
          className="brand"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          {/* Tamaño actualizado a 4rem */}
          <span
            style={{ fontSize: "4rem", lineHeight: "1" }}
            role="img"
            aria-label="Flor de cerezo"
          >
            🌸
          </span>
          <span>Blossom Nail Studio</span>
        </Link>

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
