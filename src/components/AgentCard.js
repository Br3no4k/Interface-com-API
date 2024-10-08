import React from 'react';
import {
  Card,
  ErrorText,
  AgentName,
  AgentDescription,
  AbilitiesList,
  AbilityItem,
  CloseButton,
  AgentImage,
} from '../styled/AgentCardStyles';

const AgentCard = ({ agentData, error, onClose }) => {
  return (
    <Card>
      {error && <ErrorText>{error}</ErrorText>}
      {agentData ? (
        <div>
          <CloseButton onClick={onClose}>X</CloseButton>
          <AgentImage src={agentData.imageUrl} alt={agentData.name} />
          <AgentName>{agentData.name}</AgentName>
          <AgentDescription>{agentData.description}</AgentDescription>
          <h3 style={{ color: '#9ea1a4', fontSize: '20px' }}>Habilidades:</h3>
          <AbilitiesList>
            {agentData.abilities.map((ability, index) => (
              <AbilityItem key={index}>{ability}</AbilityItem>
            ))}
          </AbilitiesList>
      
        </div>
      ) : (
        <p></p>
      )}
    </Card>
  );
};

export default AgentCard;