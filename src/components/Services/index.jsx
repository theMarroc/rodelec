import { useState } from 'react';

import { contacto } from '../../data/contact';
import { servicios } from '../../data/services';
import { linkWhatsapp } from '../../lib/whatsapp';
import {
  Arrow,
  Button,
  Categoria,
  Content,
  Desc,
  Encabezado,
  Imagen,
  Nav,
  Progress,
  Step,
  TextWrapper,
  Titulo,
  Wrapper,
} from './Services.styles';

const Services = () => {
  const [actual, setActual] = useState(0);

  const anterior = () =>
    setActual((i) => (i === 0 ? servicios.length - 1 : i - 1));
  const siguiente = () => setActual((i) => (i + 1) % servicios.length);

  const servicio = servicios[actual];

  return (
    <Wrapper id="servicios" aria-label="Nuestros servicios">
      <Encabezado>
        <h2>Nuestros servicios</h2>
        <Nav>
          <Arrow type="button" onClick={anterior} aria-label="Servicio anterior">
            {'<'}
          </Arrow>
          <Arrow type="button" onClick={siguiente} aria-label="Servicio siguiente">
            {'>'}
          </Arrow>
        </Nav>
      </Encabezado>

      <Progress>
        {servicios.map((item, indice) => (
          <Step
            key={item.id}
            type="button"
            $activo={indice === actual}
            aria-current={indice === actual}
            aria-label={`Ver ${item.titulo}`}
            onClick={() => setActual(indice)}
          >
            {String(indice + 1).padStart(2, '0')}
          </Step>
        ))}
      </Progress>

      <Content>
        <TextWrapper>
          <Categoria>{servicio.categoria}</Categoria>
          <Titulo>{servicio.titulo}</Titulo>
          <Desc>{servicio.descripcion}</Desc>
          <a
            href={linkWhatsapp(contacto.whatsapp, servicio.mensaje)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="button">
              Contactar <span>Técnico</span>
            </Button>
          </a>
        </TextWrapper>

        <Imagen
          src={servicio.imagen}
          alt={servicio.titulo}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </Content>
    </Wrapper>
  );
};

export default Services;
