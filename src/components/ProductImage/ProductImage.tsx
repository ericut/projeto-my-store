import styled from 'styled-components';
import Image from 'next/image';
import ProductImgPng from '../../../public/imgs/product_image.png';

const ProductImageContainer = styled.div`
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

const ProductImage = ({ style }: any) => {
  return (
    <ProductImageContainer style={style}>
      <div className="productImage">
        <Image src={ProductImgPng} alt="BLUSA EM LINHO COM DETALHE" />
      </div>
    </ProductImageContainer>
  );
};

export default ProductImage;
