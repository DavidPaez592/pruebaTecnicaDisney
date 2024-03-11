import styled from "styled-components";
import imagenIcono from '../../assets/images/Disneyplus.png'
import imagenFondo from '../../assets/images/login-background.jpg'
import imagenPlan from '../../assets/images/imagenPlanes.png'
import Derechos from './Derechos'; 
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import React from 'react';

const { Panel } = Collapse;

const Home = (props) => {
  return (
    <Container>
      <Content>
        <Link to="/login">
          <LoginButton>Iniciar Sesión</LoginButton>
        </Link>
        <CTA>
          <CTALogoOne src={imagenIcono} alt="" />
          <Titulo>Tus historias favoritas, todas en un mismo lugar.</Titulo>
          <SignUp>CONTRATA LA OFERTA COMBO+</SignUp>
          <CustomLink href="">
            Suscribirme solo a Disney+
          </CustomLink>
        </CTA>
        <BgImage />
      </Content>

      <Planes>
        <h2>Elige tu plan</h2>
        <p>Puedes cancelar en cualquier momento.</p>
        <PlanesLista src={imagenPlan} alt="" />
      </Planes>

      <SideAlignSection>
        <SideAlignImage src="//cnbl-cdn.bamgrid.com/assets/dae41e464f90a537d55064a1609a99890fb93a408af955519dbe9992e0ab3a04/original" alt="4 Devices" />
        <TextContainer>
          <h2>Cuando quieras, donde quieras</h2>
          <p>Disfrútalo en tu pantalla favorita, ya sea tu TV, tableta, computadora, teléfono y otros. Vive una experiencia única con una amplia selección de títulos en 4K. Además, puedes ver en cuatro pantallas en simultáneo para que nadie se quede afuera.</p>
        </TextContainer>
      </SideAlignSection>

      <OriginalesDisneySection>
        <h2>Originales Disney+ exclusivos</h2>
        <p className="text-medium">Disfruta de películas, series y documentales nunca antes vistos. Solo en Disney+.</p>
        <OriginalesDisneyGrid>
          {imageData.map((image, index) => (
            <GridItem key={index}>
              <picture>
                <source media="(min-width: 1025px)" srcSet={image.src} />
                <img src={image.src} alt={image.alt} loading="lazy" />
              </picture>
            </GridItem>
          ))}
        </OriginalesDisneyGrid>
      </OriginalesDisneySection>

      <PreguntasFrecuentesSection>
        <h2>Preguntas frecuentes</h2>
        <Collapse bordered={false} defaultActiveKey={['1']} ghost>
          <Panel
            key="1"
            header={
              <span style={{
                fontSize: '20px',
                color: "white",
                borderRadius: "1px",
                background: "#13151d",
                display: "block",
                padding: "12px",
                textAlign: 'left',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>¿Qué incluye Disney+?</span>
              </span>
            }
          >
            <RespuestaContenidoIncluye />
          </Panel>
          <Panel
            key="2"
            header={
              <span style={{
                fontSize: '20px',
                color: "white",
                borderRadius: "1px",
                background: "#13151d",
                display: "block",
                padding: "12px",
                textAlign: 'left',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>¿Ya tienes Disney+ o Star+ y quieres Combo+?</span>
              </span>
            }
          >
            <RespuestaContenidoCombo />
          </Panel>
          <Panel
            key="3"
            header={
              <span style={{
                fontSize: '20px',
                color: "white",
                borderRadius: "1px",
                background: "#13151d",
                display: "block",
                padding: "12px",
                textAlign: 'left',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>¿Cómo puedo pagar?</span>
              </span>
            }
          >
            <RespuestaContenidoPago />
          </Panel>
          <Panel
            key="4"
            header={
              <span style={{
                fontSize: '20px',
                color: "white",
                borderRadius: "1px",
                background: "#13151d",
                display: "block",
                padding: "12px",
                textAlign: 'left',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>¿Cómo puedo ver el contenido 16+ y 18+?</span>
              </span>
            }
          >
            <RespuestaContenido16 />
          </Panel>
          <Panel
            key="5"
            header={
              <span style={{
                fontSize: '20px',
                color: "white",
                borderRadius: "1px",
                background: "#13151d",
                display: "block",
                padding: "12px",
                textAlign: 'left',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>¿Dónde puedo ver Disney+?</span>
              </span>
            }
          >
            <RespuestaContenidoDondeVer />
          </Panel>
        </Collapse>
      </PreguntasFrecuentesSection>

      <Derechos />

    </Container >
  );
};

const LoginButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0,0,0,.8);
  color: var(--buttons-buttonPrimaryTextColor__87tx6ek);
  font-size: 18px;
  padding: 8px 14px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    color: black;
    background-color: white;
  }
`;


const PreguntasFrecuentesSection = styled.section`
  font-size: 40px;
  margin-bottom: 16px;
  text-align: center;
  padding: 5.6vw;
  color: white;

  h2 {
    font-size: 40px;
    margin-bottom: 16px;
  }
  .ant-collapse-content-box {
    background: #13151d;
    color: white;
  }
  .ant-collapse-header {
    color: white;
    background: #13151d;
    display: flex;
    justify-content: space-between; /* Alinea el contenido al final */
    align-items: center; /* Alinea el contenido al centro verticalmente */
    padding: 12px;
  }
  .ant-collapse-arrow {
    display: none !important;
  }
`;


const OriginalesDisneySection = styled.section`
  text-align: center;
  margin: 40px 0;
  padding: 5.6vw;

  h2 {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .text-medium {
    font-size: 18px;
    color: silver;
    margin-bottom: 32px;
  }
`;

const OriginalesDisneyGrid = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px 23px;
  justify-content: center;
`;

const GridItem = styled.li`
  flex: 0 0 calc(33.3% - 16px);
  margin-bottom: 16px;

  picture {
    display: block;
    overflow: hidden;
    border-radius: 8px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const imageData = [
  {
    src: "//cnbl-cdn.bamgrid.com/assets/e686146169abd19aa8f64e5425ff7cfb5675b1010dcb3541262678eb3787b181/original",
    alt: "Loki",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/70a5706c2e663a934938db19e73c58fd66d89e2026fc3e59d6470755705f3c17/original",
    alt: "Cars on the Road",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/27aad3ea53fdb6f725ed55771c8defc5b0518bbbc7c5d2751e2a962a42b93a1a/original",
    alt: "Hocus Pocus S2",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/c10a184a06b239b6f18acbac7615c1c3e98648b252dc7c78e59acb3011a6f48d/original",
    alt: "L-Pop",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/bfc8f73c5eed56562aa4fb55a3bbd92052fdef0ba43bff833112ecfe0c1471c8/original",
    alt: "Secret Invasion",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/6eea8b5733d1b56fcdb752a0453ce224e7f79390fe76e87b9bdb22a822868ed7/original",
    alt: "Ahsoka",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/974fb5bf7e2800a23a1d9919a6420bcf9b2a751f29a5cebf650a4498fff4e1c4/original",
    alt: "Disenchanted",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/8b4b497107d577c78b39982832b9ca7ae3c8aa080011f945ede01baf609246e3/original",
    alt: "Ms. Marvel",
  },
  {
    src: "//cnbl-cdn.bamgrid.com/assets/efd737991178dcb7bfaab89051054da6c093d5d48072304f9d9100ef85ee3c9b/original",
    alt: "Limitless",
  },
];

const Planes = styled.h2`
  font-size: 40px;
  p {
    font-size: 18px;
    color: white;
  }
`;

const SideAlignSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const SideAlignImage = styled.img`
  width: 45%;
  height: 85%;
`;

const TextContainer = styled.div`
  margin: 0px 53px  0px 0px;
  font-size: 20px;
  text-align: left;
  max-width: 720px;
  color: silver;

  h2 {
    font-size: 30px;
    text-align: left;
    color: white;
  }
`;

const Titulo = styled.h1`
  font-size: 46px;
  text-align: left; /* Alinea el texto a la izquierda */
`;

const CustomLink = styled.a`
  color: hsla(0, 0%, 95.3%, 1);
  text-align: left;
  font-size: 20px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
text-decoration: underline;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #6421ff;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 25.5px 0;
  border-radius: 4px;
  cursor: pointer; /* Asegura que el cursor sea una mano en cualquier estado */
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 180px 118px;
  height: 100%;
`;


const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${imagenFondo});
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 715px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  max-width: 1045px;
  min-height: 1px;
  display: block;
  width: 200px;
`;

const PlanesLista = styled.img`
   display: block; /* Añadido para centrar la imagen */
  margin: auto;
  display: block; /* Añadido para centrar la imagen */
  margin: auto;
  `;

const RespuestaContenidoIncluye = () => (
  <div className="accordion-child" role="region" aria-hidden="false" style={{ maxHeight: "fit-content" }}>
    <p style={{ textAlign: 'left' }}>
      <span className="medium" style={{ color: "white" }}>Beneficios de la suscripción a Disney+:</span>
    </p>
    <ul>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Experiencia de entretenimiento exclusiva.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Las mejores historias de Disney, Pixar, Marvel, Star Wars y National Geographic, todo en un mismo lugar.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Descargas ilimitadas hasta en diez dispositivos compatibles.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Más de 300 títulos en 4K UHD y HDR.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Hasta cuatro pantallas a la vez: ¡disfrutan todos!</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>IMAX Enhanced: disponible en algunos títulos de Marvel y en todos los dispositivos compatibles con Disney+.</span>
        </p>
      </li>
    </ul>
  </div>
);

const RespuestaContenidoCombo = () => (
  <div className="accordion-child" role="region" aria-hidden="false" style={{ maxHeight: "fit-content" }}>
    <p style={{ textAlign: 'left' }}>
      <span className="medium" style={{ color: "white" }}>Con Combo+:</span>
    </p>
    <ul>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Descontaremos el valor de tu suscripción actual del precio de Combo+. </span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Si tienes una suscripción mensual, el valor que pagas mensualmente se descontará del precio final de Combo+.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Por el momento, si tienes una suscripción anual a Disney+ y recibes la factura a través de Disney+, no puedes cambiarte a Combo+. Comunícate con Atencion al cliente de Disney+ para mas opciones</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Te llegará un correo electrónico con el detalle de los cargos apenas confirmes el pago.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>Recuerda que puedes cancelar en cualquier momento.</span>
        </p>
      </li>
      <li>
        <p style={{ textAlign: 'left' }}>
          <span className="medium" style={{ color: "white" }}>La suscripción a Combo+ es únicamente mensual, por el momento.</span>
        </p>
      </li>
    </ul>
  </div>
);

const RespuestaContenidoPago = () => (
  <div className="accordion-child" role="region" aria-hidden="false" style={{ maxHeight: "fit-content" }}>
    <p style={{ textAlign: 'left' }}>
      <span className="medium" style={{ color: "white" }}>Puedes pagar con tarjeta de crédito, débito, Mercado Pago, PayPal o también a través de terceros, como Google Play Store, App Store de Apple, Mercado Libre y proveedores locales de TV, telefonía e internet.</span>
    </p>
  </div>
);

const RespuestaContenido16 = () => (
  <div className="accordion-child" role="region" aria-hidden="false" style={{ maxHeight: "fit-content" }}>
    <p style={{ textAlign: 'left' }}>
      <span className="medium" style={{ color: "white" }}>Con una suscripción a Disney+ en Latinoamérica, tienes que actualizar los controles parentales de tu perfil para acceder al catálogo completo que incluye contenido 16+ y 18+. Puedes restringir el contenido así como agregar un PIN de bloqueo en cada perfil. También puedes dejar los controles parentales como están y seguir disfrutando Disney+ en un ambiente 14+ con la opción de modificarlos cuando quieras en Editar perfiles.</span>
    </p>
  </div>
);

const RespuestaContenidoDondeVer = () => (
  <div className="accordion-child" role="region" aria-hidden="false" style={{ maxHeight: "fit-content" }}>
    <p style={{ textAlign: 'left' }}>
      <span className="medium" style={{ color: "white" }}>La aplicación de Disney+ está disponible en tu dispositivo móvil, navegador web, consola de videojuegos, decodificador y Smart TV. Puedes ver la lista completa de dispositivos compatibles en el Centro de Ayuda.</span>
    </p>
  </div>
);


export default Home;
