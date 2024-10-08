import React, { useState } from 'react';
import Header from './components/Header';
import AgentCard from './components/AgentCard';
import AgentsList from './components/AgentsList';
import { Container, Input, Button } from './styled/AppStyles';

function App() {
  const [agentId, setAgentId] = useState('');
  const [agentData, setAgentData] = useState(null);
  const [error, setError] = useState('');
  const [isCardOpen, setIsCardOpen] = useState(false); 
  const agentsList = [
    { simpleId: '1', id: 'e370fa57-4757-3604-3648-499e1f642d3f', name: 'Gekko' },
    { simpleId: '2', id: 'add6443a-41bd-e414-f6ad-e58d267f4e95', name: 'Jett' },
    { simpleId: '3', id: 'dade69b4-4f5a-8528-247b-219e5a1facd6', name: 'Fade' },
    { simpleId: '4', id: '5f8d3a7f-467b-97f3-062c-13acf203c006', name: 'Breach' },
    { simpleId: '5', id: 'cc8b64c8-4b25-4ff9-6e7f-37b4da43d235', name: 'Deadlock' },
    { simpleId: '6', id: 'f94c3b30-42be-e959-889c-5aa313dba261', name: 'Raze' },
    { simpleId: '7', id: '22697a3d-45bf-8dd7-4fec-84a9e28c69d7', name: 'Chamber' },
    { simpleId: '8', id: '601dbbe7-43ce-be57-2a40-4abd24953621', name: 'KAY/O' },
    { simpleId: '9', id: '6f2a04ca-43e0-be17-7f36-b3908627744d', name: 'Skye' },
    { simpleId: '10', id: '117ed9e3-49f3-6512-3ccf-0cada7e3823b', name: 'Cypher' },
    { simpleId: '11', id: '1e58de9c-4950-5125-93e9-a0aee9f98746', name: 'Killjoy' },
    { simpleId: '12', id: '95b78ed7-4637-86d9-7e41-71ba8c293152', name: 'Harbor' }
  ];

  const handleInputChange = (e) => {
    setAgentId(e.target.value);
  };

  const fetchAgentData = async () => {
    const selectedAgent = agentsList.find((agent) => agent.simpleId === agentId);
    if (!selectedAgent) {
      setError('Agente não encontrado. Verifique o ID.');
      setAgentData(null);
      return;
    }

    try {
      const response = await fetch(`https://valorant-api.com/v1/agents/${selectedAgent.id}?language=pt-BR`);
      const data = await response.json();
      if (data.data) {
        const { displayName, description, abilities, displayIcon } = data.data; // Adicionando displayIcon para a imagem
        setAgentData({
          name: displayName,
          description,
          abilities: abilities.map((ability) => ability.displayName),
          imageUrl: displayIcon,
        });
        setError('');
        setIsCardOpen(true); 
      } else {
        setAgentData(null);
        setError('Agente não encontrado. Verifique o ID.');
      }
    } catch (err) {
      setError('Erro ao buscar dados. Tente novamente.');
    }
  };

  const closeCard = () => {
    setIsCardOpen(false);
    setAgentData(null); 
  };

  return (
    <Container>
      <Header />
      <Input
        type="text"
        value={agentId}
        onChange={handleInputChange}
        placeholder="Digite o ID"
      />
      <Button onClick={fetchAgentData}>Buscar Agente</Button>
      {isCardOpen && ( 
        <AgentCard agentData={agentData} error={error} onClose={closeCard} />
      )}
      <AgentsList agents={agentsList} />
    </Container>
  );
}

export default App;
