import styled from 'styled-components';
import { Box, Slide } from '@webql/core';

export const ContainerBox = styled(Box)`
  display: flex;
  .container-box {
    background: #f4f5f7;
    flex: 1;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    min-height: 100vh;
  }
`;
export const CustomBox = styled(Box)`
  @media (max-width: 991px) {
    display: none;
  }
`;
export const CustomBox2 = styled(Box)`
  height: 70px;
  position: relative;
  top: 0;
  display: none;
  .custom-box-2 {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  svg {
    cursor: pointer;
  }
  @media (max-width: 991px) {
    display: flex;
    align-items: center;
  }
`;
export const BoxIcon = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  color: rgba(0, 0, 0, 0.65);
  &:hover {
    background: #dae0e5;
  }
  svg {
    position: relative;
    left: 2px;
  }
`;
export const NavBarOverlay = styled.div`
  @media (max-width: 991px) {
    display: ${props => (props.open ? 'block' : 'none')};
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
export const CustomSlide = styled(Slide)`
  z-index: 1001;
`;
