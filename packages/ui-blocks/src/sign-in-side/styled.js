import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-image: url('${props => props.background}');
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  min-height: 100vh;
  width: 40%;
  .stack {
    max-width: 80%;
  }
  img {
    height: 3rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    .stack {
      width: 80%;
    }
  }
`;
export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
