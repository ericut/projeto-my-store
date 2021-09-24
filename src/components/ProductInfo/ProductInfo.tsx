import styled from 'styled-components';

const ProductInfoContainer = styled.div`
  max-width: 400px;
  width: 400px;
  display: flex;
`;

const ProductInfo = ({ style }: any) => {
  return (
    <ProductInfoContainer style={style}>
      <h2>Info</h2>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
