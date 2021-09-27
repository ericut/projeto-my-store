import styled from 'styled-components';

export const QuantitySelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  .quantitySelectorContainer {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    .quantityCounter {
      color: ${(props) => props.theme.text};
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
  }
`;
