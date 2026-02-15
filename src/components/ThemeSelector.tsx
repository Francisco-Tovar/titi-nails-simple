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

  const current = themes.find((t) => t.id === theme)?.label;

  return (
    <div className="theme-selector" ref={ref}>
      <button className="theme-trigger" onClick={() => setOpen(!open)}>
        {current}
        <span className={`arrow ${open ? "open" : ""}`} />
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
