import CSS from 'csstype';
import { ProductInfoContainer } from './ProductInfo.styles';
import { IProductData } from '../../interfaces/IProductData';

interface IProductInfo {
  style: CSS.Properties;
  productData: IProductData | undefined;
}

const ProductInfo = ({ style, productData }: IProductInfo) => {
  return (
    <ProductInfoContainer style={style}>
      <h2>Info</h2>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
