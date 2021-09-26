import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ProductGrid = styled.main`
  max-width: 1368px;
  width: 100%;
  padding: 4.5rem;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'headerArea headerArea headerArea headerArea'
    'imageArea imageArea imageArea infoArea'
    'controlsArea controlsArea controlsArea controlsArea';
  justify-content: space-between;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 2rem;
    background: red;
  }
`;
