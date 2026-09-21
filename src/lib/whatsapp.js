/**
 * Arma un link de wa.me con el mensaje ya codificado.
 * Centralizado porque antes cada componente escribía el %20 a mano y algunos
 * mensajes quedaban con acentos sin codificar.
 */
export const linkWhatsapp = (numero, mensaje = '') =>
  `https://wa.me/${numero}${mensaje ? `?text=${encodeURIComponent(mensaje)}` : ''}`;
