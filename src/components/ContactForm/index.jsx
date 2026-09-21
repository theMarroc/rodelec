import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

import { emailjsConfig } from '../../config/emailjs';
import { contacto } from '../../data/contact';
import { provincias } from '../../data/provincias';
import {
  ContactInfoItem,
  ContactInfoTitle,
  ContactSection,
  ContentWrapper,
  Form,
  FormControl,
  FormRow,
  Input,
  Label,
  SalesSection,
  Seccion,
  Select,
  SocialIconLink,
  SocialIcons,
  StatusMessage,
  SubmitButton,
  Subtitle,
  Textarea,
  Title,
} from './ContactForm.styles';

const CAMPOS_REQUERIDOS = ['nombre', 'email', 'telefono', 'provincia', 'ciudad', 'mensaje'];

const ContactForm = () => {
  const formRef = useRef(null);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState(null); // { tipo: 'ok' | 'error', texto }
  const [invalidos, setInvalidos] = useState({});

  const limpiarError = (campo) =>
    setInvalidos((previos) => {
      if (!previos[campo]) return previos;
      const { [campo]: _descartado, ...resto } = previos;
      return resto;
    });

  const enviar = async (evento) => {
    evento.preventDefault();
    setEstado(null);

    const form = formRef.current;
    const faltantes = CAMPOS_REQUERIDOS.filter((campo) => !form[campo].value.trim());

    if (faltantes.length > 0) {
      setInvalidos(Object.fromEntries(faltantes.map((campo) => [campo, true])));
      setEstado({ tipo: 'error', texto: 'Por favor completá todos los campos obligatorios.' });
      // Llevar el foco al primer campo vacío evita que el error pase inadvertido.
      form[faltantes[0]].focus();
      return;
    }

    setInvalidos({});
    setEnviando(true);

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey,
      );
      setEstado({ tipo: 'ok', texto: 'Mensaje enviado correctamente.' });
      form.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setEstado({
        tipo: 'error',
        texto: 'Hubo un error al enviar el mensaje. Intentalo nuevamente.',
      });
    } finally {
      setEnviando(false);
    }
  };

  // Props comunes a todos los campos: id/name para EmailJS, estado de error y
  // limpieza del error apenas el usuario corrige.
  const propsCampo = (campo) => ({
    id: campo,
    name: campo,
    $invalido: Boolean(invalidos[campo]),
    'aria-invalid': Boolean(invalidos[campo]),
    onChange: () => limpiarError(campo),
  });

  return (
    <Seccion id="contacto">
      <ContentWrapper>
        <ContactSection>
          <Title>Contacto vía Email</Title>
          <Subtitle>Contáctanos y un asesor se comunicará contigo.</Subtitle>

          <Form ref={formRef} onSubmit={enviar} noValidate>
            <FormRow>
              <FormControl>
                <Label htmlFor="nombre">Nombre y Apellido *</Label>
                <Input type="text" autoComplete="name" required {...propsCampo('nombre')} />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="email">Email *</Label>
                <Input type="email" autoComplete="email" required {...propsCampo('email')} />
              </FormControl>
              <FormControl>
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input type="tel" autoComplete="tel" required {...propsCampo('telefono')} />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="empresa">Empresa</Label>
                <Input type="text" autoComplete="organization" {...propsCampo('empresa')} />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="provincia">Provincia *</Label>
                <Select required defaultValue="" {...propsCampo('provincia')}>
                  <option value="" disabled>
                    Selecciona...
                  </option>
                  {provincias.map((provincia) => (
                    <option key={provincia} value={provincia}>
                      {provincia}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <Label htmlFor="ciudad">Ciudad *</Label>
                <Input
                  type="text"
                  autoComplete="address-level2"
                  required
                  {...propsCampo('ciudad')}
                />
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="tipo">Tipo de solicitud</Label>
                <Select defaultValue="Solicitud de información" {...propsCampo('tipo')}>
                  <option>Solicitud de información</option>
                  <option>Solicitud de cotización</option>
                </Select>
              </FormControl>
            </FormRow>

            <FormRow>
              <FormControl>
                <Label htmlFor="mensaje">Mensaje *</Label>
                <Textarea rows="5" required {...propsCampo('mensaje')} />
              </FormControl>
            </FormRow>

            <SubmitButton type="submit" disabled={enviando}>
              <span>{enviando ? 'Enviando...' : 'Enviar Información'}</span>
              {!enviando && <span aria-hidden="true">➜</span>}
            </SubmitButton>

            {/* role="status" hace que el lector de pantalla anuncie el resultado. */}
            <StatusMessage role="status" aria-live="polite" $tipo={estado?.tipo}>
              {estado?.texto ?? ''}
            </StatusMessage>
          </Form>
        </ContactSection>

        <SalesSection>
          <Title>Más Información</Title>

          <ContactInfoTitle>Teléfono</ContactInfoTitle>
          <ContactInfoItem>
            <FiPhone size={16} aria-hidden="true" />
            <a href={`tel:+54${contacto.whatsapp}`}>{contacto.telefonoVisible}</a>
          </ContactInfoItem>

          <ContactInfoTitle>Ubicación</ContactInfoTitle>
          <ContactInfoItem>
            <FiMapPin size={16} aria-hidden="true" />
            <span>{contacto.direccion}</span>
          </ContactInfoItem>

          <ContactInfoTitle>Correo electrónico</ContactInfoTitle>
          <ContactInfoItem>
            <FiMail size={16} aria-hidden="true" />
            <a href={`mailto:${contacto.email}`}>{contacto.email}</a>
          </ContactInfoItem>

          {/* Las redes se muestran solo si hay URL cargada en data/contact.js.
              Antes eran href="#" y no llevaban a ningún lado. */}
          {(contacto.facebook || contacto.instagram) && (
            <>
              <ContactInfoTitle>Redes sociales</ContactInfoTitle>
              <SocialIcons>
                {contacto.facebook && (
                  <SocialIconLink
                    href={contacto.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Rodelec"
                  >
                    <FiFacebook size={20} aria-hidden="true" />
                  </SocialIconLink>
                )}
                {contacto.instagram && (
                  <SocialIconLink
                    href={contacto.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Rodelec"
                  >
                    <FiInstagram size={20} aria-hidden="true" />
                  </SocialIconLink>
                )}
              </SocialIcons>
            </>
          )}
        </SalesSection>
      </ContentWrapper>
    </Seccion>
  );
};

export default ContactForm;
