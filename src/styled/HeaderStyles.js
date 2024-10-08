import styled from 'styled-components';

// Contêiner do cabeçalho
export const HeaderContainer = styled.header`
  background: linear-gradient(to right, #1c242c, #863547); 
  padding: 0px; 
  text-align: center;
  width: 100%;
  margin: 0; 
  position: relative; 
  overflow: hidden; 
`;

// Título do cabeçalho
export const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin: 0;
`;

// Descrição do cabeçalho
export const Description = styled.p`
  color: #f0f0f0;
  font-size: 1.2rem;
  margin-top: 10px; // Ajuste se necessário
`;