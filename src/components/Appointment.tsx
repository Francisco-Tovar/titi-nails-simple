import React, { useState } from "react";

const Appointment: React.FC = () => {
  const scheduleUrl = import.meta.env.VITE_APPOINTMENT_URL as
    | string
    | undefined;
  const email = "VickyTovarToledo@gmail.com";

  // Estado para el botón de copiar
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Vuelve a su estado normal después de 2s
  };

  // Textos predefinidos para el correo
  const subject = encodeURIComponent("Solicitud de Cita - Titi's Nails");
  const bodyText = encodeURIComponent(
    "Hola Vicky, me gustaría agendar una cita para arreglarme las uñas. \n\nMi disponibilidad es...",
  );

  // Enlaces
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${bodyText}`;
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${bodyText}`;

  return (
    <section className="container">
      <div className="page-block">
        <h2
          style={{ fontFamily: "var(--font-title)", color: "var(--primary)" }}
        >
          Reserva tu cita con Vicky
        </h2>

        <p style={{ marginBottom: "2rem", lineHeight: "1.6" }}>
          Elige el método que te resulte más cómodo para agendar tu espacio.
          Puedes usar nuestro calendario automático o escribirnos directamente
          por correo.
        </p>

        {/* MÉTOD0 1: Google Calendar */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            📅 Calendario en línea
          </h3>
          {!scheduleUrl ? (
            <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              No se ha configurado un enlace de citas. Añade el valor{" "}
              <code>VITE_APPOINTMENT_URL</code> en tu archivo <code>.env</code>.
            </p>
          ) : (
            <>
              <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>
                Presiona el botón para elegir el horario que más te convenga en
                tiempo real.
              </p>
              <a
                href={scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar en Calendar
              </a>
            </>
          )}
        </div>

        {/* Separador */}
        <div
          style={{
            height: "1px",
            background: "var(--border)",
            marginBottom: "2.5rem",
          }}
        ></div>

        {/* MÉTODO 2: Correo Directo */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "1rem",
              color: "var(--text)",
            }}
          >
            ✉️ Contacto por Correo
          </h3>
          <p style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            Escríbele directamente a Vicky para consultar disponibilidad o
            solicitar un diseño personalizado.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {/* Abre Gmail en el navegador */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: "transparent",
                border: "2px solid var(--primary)",
                color: "var(--text)",
              }}
            >
              Abrir en Gmail
            </a>

            {/* Abre la app nativa (Mail de iOS, Outlook, etc) */}
            <a
              href={mailtoLink}
              className="btn-primary"
              style={{
                background: "transparent",
                border: "2px solid var(--primary)",
                color: "var(--text)",
              }}
            >
              App de Correo
            </a>

            {/* Copia el correo al portapapeles */}
            <button
              onClick={handleCopy}
              className="btn-primary"
              style={{
                background: "transparent",
                border: "1px solid var(--border)",
                color: "var(--text)",
                cursor: "pointer",
              }}
            >
              {copied ? "¡Copiado! ✓" : "Copiar correo"}
            </button>
          </div>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.85rem",
              opacity: 0.7,
              fontWeight: 600,
            }}
          >
            {email}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
