import styled from 'styled-components';

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 560px;
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
    left: 100px;
    z-index: -1;
  }
`;
