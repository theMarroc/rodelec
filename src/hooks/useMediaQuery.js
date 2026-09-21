import { useEffect, useState } from 'react';

/** Evalúa una media query y se re-renderiza cuando cambia. */
export default function useMediaQuery(consulta) {
  const [coincide, setCoincide] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(consulta).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(consulta);
    const alCambiar = (evento) => setCoincide(evento.matches);

    setCoincide(mql.matches);
    mql.addEventListener('change', alCambiar);
    return () => mql.removeEventListener('change', alCambiar);
  }, [consulta]);

  return coincide;
}
