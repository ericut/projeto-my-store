import styled from 'styled-components';

export const ProductInfoContainer = styled.div`
  max-width: 400px;
  width: 400px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  .productName {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0 0 16px 0;
    border-bottom: 1px solid;
    border-bottom-color: ${(props) => props.theme.borders};
    margin-bottom: 16px;
  }
  .productSeller {
    font-weight: normal;
    font-size: 12px;
    letter-spacing: 0.02em;
    margin-bottom: 36px;
    .store {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    justify-content: flex-end;
    max-width: 100%;
    width: 100%;
    margin: 20px 0;
  }
`;
