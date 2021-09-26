import styled from 'styled-components';

export const ProductControlsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 105px;
  display: flex;
  gap: 48px;
  align-items: center;
  padding: 24px 48px;
  background: #f7f7f7;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 80px;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .productControlTitles {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.04em;
  }
`;
