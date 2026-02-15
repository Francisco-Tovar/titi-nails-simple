import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeSelector from "./ThemeSelector";

const Header: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">Titi's Nails</div>

        <nav className="nav">
          <Link to="/">Galería</Link>
          <Link to="/appointments">Agenda una cita</Link>
        </nav>

        <ThemeSelector />
      </div>
    </header>
  );
};

export default Header;
