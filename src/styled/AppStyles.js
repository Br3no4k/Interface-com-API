import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--primary-bg);
    color: var(--text-color);
    padding: 0;
    min-height: 100vh;
    display: flex-box;
    justify-content: center; 
    align-items: center; 
`;

export const Input = styled.input`
    padding: 10px; 
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 0px;
    margin: 20px 1187px;    
    display: flex;

`;

export const Button = styled.button`
    background-color: #1c242c;
    color: #9ea1a4;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #863547;
    }
    margin: 10px 1220px;
`;