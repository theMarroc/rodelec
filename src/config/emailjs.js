/**
 * Configuración de EmailJS.
 *
 * Estas tres claves son públicas por diseño: viajan en el bundle del navegador
 * y no hay forma de ocultarlas en una app sin backend. Están acá para poder
 * cambiarlas sin tocar el componente, no por seguridad.
 *
 * La protección real se activa en el panel de EmailJS:
 * Account > Security > Allowed domains -> rodelec.com
 */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_rodelec',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_qm251x1',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'gGfoALCGKoSP4T90a',
};

if (import.meta.env.DEV && !import.meta.env.VITE_EMAILJS_SERVICE_ID) {
  console.warn(
    '[EmailJS] Usando las credenciales por defecto del código. ' +
      'Copiá .env.example a .env para configurarlas.',
  );
}
