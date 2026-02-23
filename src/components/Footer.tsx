import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-rights">
          &copy; {new Date().getFullYear()} Blossom Nail Studio. Todos los
          derechos reservados.
        </p>
        <p className="footer-credits">
          Creado por{" "}
          <a
            href="https://francisco-tovar.github.io/PORTAFOLIO/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: "bold", color: "var(--primary)" }}
          >
            Thovarisk
          </a>{" "}
          en 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
