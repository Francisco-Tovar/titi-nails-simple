import React from "react";

const Appointment: React.FC = () => {
  const scheduleUrl = import.meta.env.VITE_APPOINTMENT_URL as
    | string
    | undefined;

  return (
    <section className="container">
      <div className="page-block">
        <h2
          style={{ fontFamily: "var(--font-title)", color: "var(--primary)" }}
        >
          Reserva tu cita
        </h2>
        {!scheduleUrl ? (
          <p>
            No se ha configurado un enlace de citas. Añade el valor{" "}
            <code>VITE_APPOINTMENT_URL</code> en tu archivo <code>.env</code>{" "}
            con el enlace público de Google Calendar Appointment Schedule para
            activar el botón de reserva.
          </p>
        ) : (
          <div style={{ marginTop: "1.5rem" }}>
            <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
              Presiona el botón para elegir el horario que más te convenga.
              Serás redirigida al sistema oficial de Google Calendar de forma
              segura.
            </p>
            <a
              href={scheduleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar cita
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Appointment;
