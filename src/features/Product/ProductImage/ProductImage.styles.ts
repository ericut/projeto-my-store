import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  width: 700px;
  height: 500px;
  margin-bottom: 60px;
  display: flex;
  position: relative;
  .productImage {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 30px;
    z-index: -1;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 368px;
    margin-bottom: 10px;
    .productImage {
      left: 0;
    }
  }
`;
