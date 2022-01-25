import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 230px;
  height: 40px;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  border: 1px solid #c8c8c8;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #888888;
  cursor: pointer;
  box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const PaginationNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const BlueBox = styled.p`
  padding: 0 6px 3px 5px;
  background-color: #ebf7ff;
  border-radius: 3px;
  color: #01a1ff;
`;
