import React from 'react';
import { HeaderContainer, Title, Description } from '../styled/HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Valorant Agentes</Title>
      <Description>Pesquise os dados do agente pelo ID</Description>
    </HeaderContainer>
  );
};

export default Header;