import React, { useState } from "react";
import metodos from "../assets/info/metodos.jpeg";
import politicas from "../assets/info/politicas.jpeg";
import comprar from "../assets/info/comprar.jpeg";

const Info: React.FC = () => {
  // State to hold the image currently being viewed in the modal
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="container about-container">
      <div className="page-block" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-title)",
            color: "var(--primary)",
            fontSize: "2.2rem",
            marginBottom: "10px",
          }}
        >
          Información Importante 🌸
        </h2>
        <p
          style={{
            color: "var(--text)",
            marginBottom: "40px",
            fontSize: "1.05rem",
            opacity: 0.9,
          }}
        >
          Todo lo que necesitas saber sobre nuestros métodos de pago, envíos y
          políticas del estudio. ¡Lee con atención antes de agendar! ✨
        </p>

        {/* Hero Collage */}
        <div className="info-collage">
          <img
            src={comprar}
            alt="Cómo comprar"
            title="Cómo comprar"
            onClick={() => setSelectedImg(comprar)}
            style={{ cursor: "pointer" }}
          />
          <img
            src={metodos}
            alt="Métodos de pago"
            title="Métodos de pago"
            onClick={() => setSelectedImg(metodos)}
            style={{ cursor: "pointer" }}
          />
          <img
            src={politicas}
            alt="Políticas"
            title="Políticas"
            onClick={() => setSelectedImg(politicas)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImg && (
        <div className="modal-overlay" onClick={() => setSelectedImg(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Información ampliada"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Info;
