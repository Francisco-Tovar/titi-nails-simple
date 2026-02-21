import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = [
  { id: "luxury", label: "Luxury" },
  { id: "pastel", label: "Pastel" },
  { id: "instagram", label: "Instagram" },
  { id: "minimal", label: "Minimal" },
];

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="theme-selector" ref={ref}>
      <button
        className="theme-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Cambiar tema"
      >
        {/* Icono de Hamburguesa Exclusivo */}
        <svg
          className="hamburger-icon"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {open && (
        <div className="theme-menu">
          {themes.map((t) => (
            <div
              key={t.id}
              className={`theme-option ${theme === t.id ? "active" : ""}`}
              onClick={() => {
                setTheme(t.id as any);
                setOpen(false);
              }}
            >
              {t.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
