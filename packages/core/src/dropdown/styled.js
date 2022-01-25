import styled from 'styled-components';

export const DropdownContainerOne = styled.div`
  width: ${props => props.width || '240px'};
  height: ${props => props.height || '36px'};
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  display: grid;
  grid-template-columns: 18% 72% 10%;
  justify-content: center;
  align-items: center;
`;

export const DropdownImgbox = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #d1d1d1;
  justify-self: center;
`;

export const DropdownImg = styled.img`
  background-size: cover;
  border-radius: 50%;
`;

export const DropdownTitle = styled.p`
  font-family: 'Hind', sans-serif;
  color: #4d4d4d;
`;

export const DropdownContainerTwo = styled.div`
  width: ${props => props.width || '186px'};
  height: ${props => props.height || '40px'};
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  display: grid;
  grid-template-columns: 82% 8%;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const DropdownTitleBox = styled.div``;
