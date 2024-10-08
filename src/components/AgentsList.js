import React from 'react';
import { ListContainer, AgentItem, ListTitle } from '../styled/AgentsListStyles';

const AgentsList = ({ agents }) => {
  return (
    <ListContainer>
      <ListTitle>Agentes disponíveis:</ListTitle>
      <ul>
        {agents.map((agent) => (
          <AgentItem key={agent.id}>
            {agent.simpleId} | {agent.name} 
          </AgentItem>
        ))}
      </ul>
    </ListContainer>
  );
};

export default AgentsList;
