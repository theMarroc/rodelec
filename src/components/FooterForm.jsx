import styled, { keyframes, css } from 'styled-components';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiPhone, FiMapPin, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi';

const FooterForm = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    const form = formRef.current;
    const requiredFields = ['nombre', 'email', 'telefono', 'mensaje', 'provincia', 'ciudad'];
    let allValid = true;

    requiredFields.forEach((fieldId) => {
      const input = form[fieldId];
      if (!input.value.trim()) {
        allValid = false;
        input.style.border = '2px solid red';
      } else {
        input.style.border = '1px solid #ccc';
      }
    });

    if (!allValid) {
      setStatusMessage('❌ Por favor completa todos los campos obligatorios.');
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_rodelec',
        'template_qm251x1',
        form,
        'gGfoALCGKoSP4T90a'
      );
      setStatusMessage('✅ Mensaje enviado correctamente.');
      form.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setStatusMessage('❌ Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <FooterContainer>
      {/* <TopOverlay /> */}
      <BackgroundOverlay />

      <ContentWrapper>
        {/* <Padder> */}
        <ContactSection>
          <Title>Contacto</Title>
          <Subtitle>Contáctanos y un asesor se comunicará contigo.</Subtitle>

          <Form ref={formRef} onSubmit={sendEmail}>
            <FormRow>
              <FormControl className="full-width">
                <Label htmlFor="nombre">Nombre y Apellido *</Label>
                <Input type="text" id="nombre" name="nombre" required />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="email">Email *</Label>
                <Input type="email" id="email" name="email" required />
              </FormControl>
              <FormControl>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input type="tel" id="telefono" name="telefono" required />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl className="full-width">
                <Label htmlFor="empresa">Empresa</Label>
                <Input type="text" id="empresa" name="empresa" />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="provincia">Provincia *</Label>
                <Select id="provincia" name="provincia" required>
                  <option value="">Selecciona...</option>
                  <option value="buenos_aires">Buenos Aires</option>
                  <option value="catamarca">Catamarca</option>
                  <option value="chaco">Chaco</option>
                  <option value="chubut">Chubut</option>
                  <option value="caba">Ciudad Autónoma de Buenos Aires</option>
                  <option value="cordoba">Córdoba</option>
                  <option value="corrientes">Corrientes</option>
                  <option value="entre_rios">Entre Ríos</option>
                  <option value="formosa">Formosa</option>
                  <option value="jujuy">Jujuy</option>
                  <option value="la_pampa">La Pampa</option>
                  <option value="la_rioja">La Rioja</option>
                  <option value="mendoza">Mendoza</option>
                  <option value="misiones">Misiones</option>
                  <option value="neuquen">Neuquén</option>
                  <option value="rio_negro">Río Negro</option>
                  <option value="salta">Salta</option>
                  <option value="san_juan">San Juan</option>
                  <option value="san_luis">San Luis</option>
                  <option value="santa_cruz">Santa Cruz</option>
                  <option value="santa_fe">Santa Fe</option>
                  <option value="santiago_del_estero">Santiago del Estero</option>
                  <option value="tierra_del_fuego">Tierra del Fuego</option>
                  <option value="tucuman">Tucumán</option>
                </Select>
              </FormControl>

              <FormControl>
                <Label htmlFor="ciudad">Ciudad *</Label>
                <Input type="text" id="ciudad" name="ciudad" required />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl className="full-width">
                <Label htmlFor="tipo">Tipo de solicitud</Label>
                <Select id="tipo" name="tipo">
                  <option value="Solicitud de información">Solicitud de información</option>
                  <option value="Solicitud de cotización">Solicitud de cotización</option>
                </Select>
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl className="full-width">
                <Label htmlFor="mensaje">Mensaje*</Label>
                <Textarea id="mensaje" name="mensaje" rows="5" />
              </FormControl>
            </FormRow>

            <SubmitButton type="submit" disabled={isSending}>
              <ButtonText>{isSending ? 'Enviando...' : 'Enviar Información'}</ButtonText>
              {!isSending && <ButtonIcon>➜</ButtonIcon>}
            </SubmitButton>

            {statusMessage && <StatusMessage>{statusMessage}</StatusMessage>}
          </Form>
        </ContactSection>

        <SalesSection>
          <Title>Más Información</Title>

          <ContactInfoTitle>TELÉFONO</ContactInfoTitle>
          <ContactInfoItem>
            <FiPhone size={16} color="#FBC02D" />
            <ContactInfoText>(0223) 155.111081</ContactInfoText>
          </ContactInfoItem>

          <ContactInfoTitle>UBICACIÓN</ContactInfoTitle>
          <ContactInfoItem>
            <FiMapPin size={16} color="#FBC02D" />
            <ContactInfoText>Avenida del Mar 1534 - Miramar - Bs. As.</ContactInfoText>
          </ContactInfoItem>

          <ContactInfoTitle>CORREO ELECTRÓNICO</ContactInfoTitle>
          <ContactInfoItem>
            <FiMail size={16} color="#FBC02D" />
            <ContactInfoText>serviciosrodelec@gmail.com</ContactInfoText>
          </ContactInfoItem>

          <ContactInfoTitle>REDES SOCIALES</ContactInfoTitle>
          <SocialIcons>
            <SocialIconLink href="#" target="_blank"><FiFacebook size={20} /></SocialIconLink>
            <SocialIconLink href="#" target="_blank"><FiInstagram size={20} /></SocialIconLink>
          </SocialIcons>
        </SalesSection>
        {/* </Padder> */}
      </ContentWrapper>
    </FooterContainer>
  );
};

export default FooterForm;

/* --------------------------------------------------- */
/* ------------------- STYLES ----------------------- */
/* --------------------------------------------------- */

const COLORS = {
  primaryBg: '#111',
  secondaryBg: '#181818',
  text: '#FFF',
  label: '#B3B3B3',
  inputBg: '#EFEFEF',
  buttonBg: '#FBC02D',
  buttonHover: '#FFEB3B',
  placeholder: '#999',
};

const backgroundAnimation = keyframes`
  from { transform: rotate(0deg) scale(1); }
  to { transform: rotate(360deg) scale(1.05); }
`;
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="%23FFFFFF" d="M100 0L0 100V0z" opacity="0.1"/></svg>');
  background-size: 200px 200px;
  background-repeat: repeat;
  animation: ${backgroundAnimation} 60s linear infinite;
  z-index: 0;
  overflow: hidden;
`;

const FooterContainer = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme.body};
  color: ${COLORS.text};
  padding: 0 0 20px 0;
  overflow-x: hidden; 
  overflow-y: hidden;
`;

const TopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(180deg, #111 10%, transparent 150%);
  pointer-events: none;
  z-index: 2;
`



const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  gap: 40px;
  z-index: 1;
  box-sizing: border-box;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 576px) {
    padding: 0 15px;
  }

`;


const ContactSection = styled.div`
  flex: 3;
`;

const SalesSection = styled.div`
  flex: 2;
  padding-left: 40px;
  border-left: 1px solid ${COLORS.secondaryBg};

  @media (max-width: 992px) {
    padding-left: 0;
    border-left: none;
    border-top: 1px solid ${COLORS.secondaryBg};
    padding-top: 30px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${COLORS.text};
  border-bottom: 1px solid grey;

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.greyAndBlack};
  margin-bottom: 25px;

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 576px) {
    gap: 15px;
  }
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FormControl = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  &.full-width {
    flex: 1 1 100%;
  }

  /* CORRECCIÓN PARA MÓVIL */
  @media (max-width: 576px) {
    width: 100%;
    flex: 1 1 100%; 
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 400;
  color: ${COLORS.text};
  margin-bottom: 5px;

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const BaseInputStyles = css`
  display: block;
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 4px;
  background-color: ${COLORS.inputBg};
  color: ${COLORS.primaryBg};
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: ${COLORS.placeholder};
  }

  &:focus {
    outline: 2px solid ${COLORS.buttonBg};
    outline-offset: 1px;
  }
`;

const Input = styled.input`
  ${BaseInputStyles}
  box-sizing: border-box; /* importante para que padding no aumente ancho */

  @media (max-width: 576px) {
    width: 100%;
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #fff;
  max-height: 12rem;
  overflow-y: auto;
  box-sizing: border-box;

  @media (max-width: 576px) {
    width: 100%;
    padding: 0.45rem;
    font-size: 0.95rem;
  }
`;

const Textarea = styled.textarea`
  ${BaseInputStyles}
  box-sizing: border-box;

  @media (max-width: 576px) {
    width: 100%;
    padding: 10px 12px;
    font-size: 0.95rem;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
  background-color: ${COLORS.buttonBg};
  color: ${COLORS.primaryBg};
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: ${COLORS.buttonHover};
  }

  @media (max-width: 576px) {
    padding: 12px 20px;
    font-size: 1rem;
  }
`;



const ButtonText = styled.span`
  margin-right: 10px;

  @media (max-width: 576px) {
    margin-right: 8px;
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const StatusMessage = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  color: ${COLORS.text};
`;

const ContactInfoTitle = styled.h3`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${COLORS.label};
  margin-top: 25px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;

  svg {
    color: ${COLORS.buttonBg};
  }
`;

const ContactInfoText = styled.p`
  font-size: 1rem;
  color: ${COLORS.text};
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIconLink = styled.a`
  color: ${COLORS.text};
  width: 35px;
  height: 35px;
  border: 1px solid ${COLORS.text};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.buttonBg};
    color: ${COLORS.primaryBg};
    border-color: ${COLORS.buttonBg};
  }
`;
