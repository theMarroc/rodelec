import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaWhatsapp, FaPhone, FaUserTie } from "react-icons/fa";

const message = encodeURIComponent(
  "Me contacto desde RODELEC.com para una consulta personalizada."
);
const staffData = [
  {
    id: "luis",
    isLead: true,
    name: (
      <>
        Luis R<span style={{ color: "#0d73c5" }}>o</span>driguez
      </>
    ), role: "Técnico Electromecánico", role2: (
      <>
        Matrícula T-44676-CTPBA<span style={{ color: "#0d73c5", fontWeight: "bolder" }}></span>
      </>
    ), phone: "+54 9 223 511-1081", whatsapp: `2235111081`
  },
  { name: "Tomás Scalzo", role: "Electricista Certificado", role2: "Instalador de aires acondicionados", phone: "+54 9 2291 51-7486", whatsapp: `2291517486` },
  { name: "Gastón Ferreira", role: "Electricista Certificado", role2: "Jefe de Obra", phone: "+54 9 2291 41-0530", whatsapp: `2291410530` },
  { name: "Mariano Gavilán", role: "Electricista Certificado", role2: "Mantenimiento de Instalación", phone: "+54 9 223 622-0217", whatsapp: `2236220217` },
  { name: "Esteban Leal", role: "Electricista Certificado", role2: "", phone: "+54 9 2291 40-2501", whatsapp: `2291402501` },
  { name: "Daniel Aliatta", role: "Auxiliar de Instalación", role2: "", phone: "+54 9 11 2454-3107", whatsapp: `1124543107` },
  // ,{ name: "Marco Scalzo", role: "Técnico Especialista", phone: "+54 9 2291 51-2866", whatsapp: `2291512866` },
];

const StaffSection = styled.section`
  padding: 4rem 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  margin-top: 0rem;
  text-transform: uppercase;
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadow};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const UserCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 15px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: ${({ theme }) => theme.hover};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.buttonBackground};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 2px solid ${({ theme }) => theme.subText};
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
`;

const Name = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin: 0.5rem 0;
  text-align: center;
`;

const Role = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.subText};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Role2 = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.subText};
  font-size: 0.8rem;
  margin-bottom: 1rem;
  margin-top: 0rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.greyAndBlack}; // Usando un color legible del tema
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.whatsapp};
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  margin-top: 1.5rem;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    transform: scale(1.05);
    background-color: #1ebc57;
    color: #fff;
  }
`;

const shuffleExceptLead = (array) => {
  const lead = array.find(item => item.isLead);
  const rest = array.filter(item => !item.isLead);

  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  return lead ? [lead, ...rest] : rest;
};


const Staff = () => {

  const [OrderedStaff, setOrderedStaff] = useState([]);

  useEffect(() => {
    setOrderedStaff(shuffleExceptLead(staffData));
  }, []);

  return (
    <StaffSection id="staff">
      <Title>Staff Técnico</Title>
      <Grid>
        {OrderedStaff.map((staff) => (
          <UserCard key={staff.name}>
            <Avatar>
              <FaUserTie />
            </Avatar>
            <Name>{staff.name}</Name>
            <Role>{staff.role}</Role>
            <Role2>{staff.role2}</Role2>

            <InfoRow>
              <FaPhone size={14} />
              <span>{staff.phone}</span>
            </InfoRow>

            <WhatsAppButton
              href={`https://wa.me/${staff.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
              Contactar
            </WhatsAppButton>
          </UserCard>
        ))}
      </Grid>
    </StaffSection>
  );
};

export default Staff;
