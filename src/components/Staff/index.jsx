import { useState } from 'react';
import { FaPhone, FaUserTie, FaWhatsapp } from 'react-icons/fa';

import { mensajeStaff, staff } from '../../data/staff';
import { linkWhatsapp } from '../../lib/whatsapp';
import {
  Avatar,
  Grid,
  InfoRow,
  Name,
  Role,
  RoleDetalle,
  StaffSection,
  Title,
  UserCard,
  WhatsAppButton,
} from './Staff.styles';

// Fisher-Yates sobre una copia: el líder queda fijo al frente y el resto rota
// para no favorecer siempre al mismo técnico.
const mezclarSinLider = (lista) => {
  const lider = lista.find((persona) => persona.lider);
  const resto = lista.filter((persona) => !persona.lider);

  for (let i = resto.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [resto[i], resto[j]] = [resto[j], resto[i]];
  }

  return lider ? [lider, ...resto] : resto;
};

const Staff = () => {
  // Inicializador perezoso: antes arrancaba en [] y se mezclaba en un useEffect,
  // así que el primer pintado mostraba la grilla vacía.
  const [equipo] = useState(() => mezclarSinLider(staff));

  return (
    <StaffSection id="staff">
      <Title>Staff Técnico</Title>
      <Grid>
        {equipo.map((persona) => (
          <UserCard key={persona.id}>
            <Avatar aria-hidden="true">
              <FaUserTie />
            </Avatar>
            <Name>{persona.nombre}</Name>
            <Role>{persona.rol}</Role>
            {persona.detalle && <RoleDetalle>{persona.detalle}</RoleDetalle>}

            <InfoRow href={`tel:${persona.telefono.replace(/[^+\d]/g, '')}`}>
              <FaPhone size={14} aria-hidden="true" />
              <span>{persona.telefono}</span>
            </InfoRow>

            <WhatsAppButton
              href={linkWhatsapp(persona.whatsapp, mensajeStaff)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Contactar a ${persona.nombre} por WhatsApp`}
            >
              <FaWhatsapp size={20} aria-hidden="true" />
              Contactar
            </WhatsAppButton>
          </UserCard>
        ))}
      </Grid>
    </StaffSection>
  );
};

export default Staff;
