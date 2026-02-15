import React from 'react';

/**
 * Simplified appointment component. Instead of integrating with the Calendar API,
 * this component presents a button linking to a public appointment schedule
 * provided by Google Calendar. The appointment URL must be stored in
 * `VITE_APPOINTMENT_URL`.
 */
const Appointment: React.FC = () => {
  const scheduleUrl = import.meta.env.VITE_APPOINTMENT_URL as string | undefined;
  return (
    <section>
      <h2 style={{ fontFamily: 'Pacifico, cursive', color: 'var(--primary-color)' }}>
        Reserva tu cita
      </h2>
      {!scheduleUrl ? (
        <p>
          No se ha configurado un enlace de citas. Añade el valor
          <code>VITE_APPOINTMENT_URL</code> en tu archivo <code>.env</code> con el
          enlace público de Google Calendar Appointment Schedule para activar el
          botón de reserva.
        </p>
      ) : (
        <div style={{ marginTop: '1rem' }}>
          <p>
            Presiona el botón para elegir el horario que más te convenga. Serás
            redirigida al sistema oficial de Google Calendar.
          </p>
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--primary-color)',
              color: '#fff',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Agendar cita
          </a>
        </div>
      )}
    </section>
  );
};

export default Appointment;