import styled from 'styled-components';

const ProductControlsContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 105px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 48px;
  background: #f7f7f7;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  border-radius: 80px;
`;

const ProductControls = ({ style }: any) => {
  return (
    <ProductControlsContainer style={style}>
      <span>Controls</span>
    </ProductControlsContainer>
  );
};

export default ProductControls;
