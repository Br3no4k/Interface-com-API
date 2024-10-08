import styled from 'styled-components';

export const Card = styled.div`
  background: linear-gradient(to right, #1c242c, #863547);
  border: 2px solid #ddd; 
  border-radius: 8px; 
  padding: 40px; 
  margin: auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  position: relative; 
  display: flex-box; 
  max-width: 1160px; 
  
  
`;

export const AgentName = styled.h2`
  color: #9ea1a4;
  font-size: 1.8rem;
  margin: 0 0 10px 0;
`;




export const AgentDescription = styled.p`
  color: #9ea1a4;
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const AbilitiesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const AbilityItem = styled.li`
  color: #9ea1a4;
  font-size: 1.1rem;
  margin: 5px 0;
`;

export const ErrorText = styled.p`

  color: red;
  font-size: 14px;
  margin-top: 10px;
`;

export const CloseButton = styled.button`
  position: absolute; /* Posicionar o botão no canto */
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem ;
`;

export const AgentImage = styled.img`
  border-radius: 50%; 
  width: 100px; 
  height: 100px; 
  margin-bottom: 10px ; 


`;