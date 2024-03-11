import React from 'react';
import styled from 'styled-components';

const Derechos = () => {
  return (
    <Footer>
      <TextContainerFooter>
        <div className="content-container">
          <div className="center-container">
            <LogoContainer className="sm-130 md-180 lg-180 logo">
              <LogoImage
                src="//cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
                alt="Disney+ Logo"
                loading="lazy"
              />
            </LogoContainer>
            <ListContainer>
              <ListItem>Español</ListItem>
              <ListItem>Términos de uso</ListItem>
              <ListItem>Política de privacidad</ListItem>
              <ListItem>Complemento Política de privacidad</ListItem>
              <ListItem>Publicidad personalizada</ListItem>
              <ListItem>Dispositivos compatibles</ListItem>
              <ListItem>Ayuda</ListItem>
            </ListContainer>
            <p>Acerca de Disney+</p>
            <p className="text-fine">
              © 2024 Disney y su familia de compañías afiliadas. Todos los derechos
              reservados.<br />
              <br />
              Disney+ es un servicio por suscripción de pago, su contenido está
              sujeto a disponibilidad. El servicio Disney+ es comercializado por The
              Walt Disney Company Colombia S.A, Calle<br />
              70 Bis No. 4 – 41, Bogotá D.C.,Colombia. y número de NIT es 800.236.937-1
            </p>
          </div>
        </div>
      </TextContainerFooter>
    </Footer>
  );
};

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextContainerFooter = styled.div`
  margin: 0px 15px 10px;
  text-align: center;
  color: white;
`;

const LogoContainer = styled.picture`
  display: block;
  margin: auto;
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  margin: auto;
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 16px 0;
  display: flex;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  color: silver;
`;

export default Derechos;
