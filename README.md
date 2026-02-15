# Titi's Nails – Versión simplificada

Esta versión de la aplicación de Titi's Nails ofrece una galería de fotos y un botón para reservar citas sin necesidad de implementar OAuth ni API complejas. Es ideal si prefieres un mantenimiento mínimo y un coste cero.

## ¿Qué hace?

* **Galería de fotos** – Muestra las imágenes de una carpeta de Google Drive pública. Sólo necesitas proporcionar el ID de la carpeta y un API key. La galería se actualiza automáticamente cuando agregas o quitas fotos en la carpeta.
* **Reserva de citas** – En lugar de integrar la API de Calendar, se utiliza el sistema de Programación de Citas de Google Calendar. Puedes definir horarios, servicios y duraciones directamente en Google Calendar. La aplicación muestra un botón que redirige a tu enlace de citas.
* **Panel de administración** – Explica cómo actualizar la galería y las citas modificando la carpeta de Drive y el enlace de citas. También muestra los emails de administradores definidos.

## Variables de entorno necesarias

Crea un archivo `.env` en la raíz del proyecto con estas claves (no lo subas a un repositorio público):

```env
VITE_GOOGLE_API_KEY=tu-api-key
VITE_DRIVE_FOLDER_ID=id_de_carpeta_drive
VITE_APPOINTMENT_URL=https://calendar.app.google/tu_enlace_de_citas
VITE_ADMIN_EMAILS=correo_admin1@gmail.com,correo_admin2@gmail.com
```

* `VITE_GOOGLE_API_KEY` – API key de Google para consultar el listado de archivos en Drive. Sigue la guía de Google para crear una API key.
* `VITE_DRIVE_FOLDER_ID` – Identificador de la carpeta de Google Drive que contiene las fotos. La carpeta debe permitir acceso público (cualquiera con el enlace puede ver).
* `VITE_APPOINTMENT_URL` – Enlace generado por Google Calendar al crear una programación de citas (appointment schedule). Este enlace permite que tus clientas seleccionen horarios disponibles.
* `VITE_ADMIN_EMAILS` – Lista de correos electrónicos, separados por comas, de las personas que administran el sitio. Se muestran en el panel de administración como referencia.

## Instalación

1. Descarga o clona este repositorio.
2. Crea el archivo `.env` con las variables de entorno descritas arriba.
3. Abre una terminal en la carpeta del proyecto y ejecuta:

   ```bash
   npm install
   npm run dev
   ```

4. La aplicación estará disponible en `http://localhost:5173/` o similar.

## Despliegue en GitHub Pages

1. Asegúrate de que el campo `base` en `vite.config.ts` sea `'/'` o ajusta según la URL del repositorio (por ejemplo, `'/titi-nails/'`).
2. Ejecuta `npm run build` para generar la carpeta `dist`.
3. Publica el contenido de `dist` en la rama `gh-pages` de tu repositorio.

## Uso de Google Appointment Schedule

Para generar el enlace de citas:

1. Abre Google Calendar con la cuenta de tu hija.
2. En el menú lateral, selecciona **Appointment schedule** y sigue los pasos para definir horas de atención y duración de las citas.
3. Copia el enlace público generado y pégalo en `VITE_APPOINTMENT_URL`.

Con este enfoque, Google se encarga de las reservas, confirmaciones por correo electrónico y gestión de conflictos. La página simplemente dirige a las clientas al formulario de citas.