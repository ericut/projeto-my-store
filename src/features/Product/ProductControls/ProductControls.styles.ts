import styled from 'styled-components';

export const ProductControlsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  min-height: 105px;
  display: flex;
  gap: 48px;
  align-items: center;
  padding: 24px 48px;
  background: ${(props) => props.theme.background.secondary};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 80px;
  .productControlButtonContainer {
    margin-top: 6px;
  }
  .productControlTitles {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    padding: 24px;
    gap: 18px;
  }
`;
