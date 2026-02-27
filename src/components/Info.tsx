import React from "react";
import metodos from "../assets/info/metodos.jpeg";
import politicas from "../assets/info/politicas.jpeg";
import comprar from "../assets/info/comprar.jpeg";

const Info: React.FC = () => {
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

        {/* Hero Collage de 3 Imágenes */}
        <div className="info-collage">
          <img src={comprar} alt="Cómo comprar" title="Cómo comprar" />
          <img src={metodos} alt="Métodos de pago" title="Métodos de pago" />
          <img src={politicas} alt="Políticas" title="Políticas" />
        </div>
      </div>
    </section>
  );
};

export default Info;
