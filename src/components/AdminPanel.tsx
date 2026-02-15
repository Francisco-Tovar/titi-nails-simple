import React from 'react';

/**
 * Provides guidance on how to manage the gallery and appointment schedule for
 * the simplified version. There is no interactive administration; you update
 * the Google Drive folder and Google Calendar separately.
 */
const AdminPanel: React.FC = () => {
  const adminEmails = (import.meta.env.VITE_ADMIN_EMAILS as string | undefined)
    ?.split(',')
    .map((e) => e.trim());
  return (
    <section>
      <h2
        style={{ fontFamily: 'Pacifico, cursive', color: 'var(--primary-color)' }}
      >
        Panel de administración
      </h2>
      <p>
        Este sitio es estático y no incluye un panel de edición en vivo. Los
        contenidos y la agenda se gestionan con los servicios de Google.
      </p>
      <ul style={{ paddingLeft: '1rem' }}>
        <li>
          <strong>Galería:</strong> Para añadir o eliminar imágenes en la
          galería, sube o borra fotos en la carpeta de Google Drive cuyo ID está
          configurado en <code>VITE_DRIVE_FOLDER_ID</code> (asegúrate de que la
          carpeta sea pública).
        </li>
        <li>
          <strong>Citas:</strong> Configura tus horarios y servicios en Google
          Calendar usando las funciones de "Appointment schedule". Copia el
          enlace público y colócalo en <code>VITE_APPOINTMENT_URL</code>.
        </li>
        <li>
          <strong>Admins autorizados:</strong>{' '}
          {adminEmails && adminEmails.length > 0
            ? adminEmails.join(', ')
            : 'No se han configurado correos administradores.'}
        </li>
      </ul>
    </section>
  );
};

export default AdminPanel;