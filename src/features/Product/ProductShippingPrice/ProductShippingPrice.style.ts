import styled from 'styled-components';

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;
  .shippingTitle {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0 0 24px;
  }
  .shippingCalculator {
    margin-bottom: 24px;
    display: flex;
    gap: 30px;
  }
  .shippingNumberFinder {
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
  }
`;
