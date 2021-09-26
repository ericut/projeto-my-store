import CSS from 'csstype';
import { ProductInfoContainer } from './ProductInfo.styles';
import { IProductData } from '../../interfaces/IProductData';
import ProductRating from '../ProductRating/ProductRating';
import Tabs from '../Tabs/Tabs';
import Shipping from '../Shipping/Shipping';

interface IProductInfo {
  style: CSS.Properties;
  productData: IProductData | undefined;
}

const ProductInfo = ({ style, productData }: IProductInfo) => {
  return (
    <ProductInfoContainer style={style}>
      <h2 className="productName">{productData?.name}</h2>
      <ProductRating productData={productData} />
      <span className="productSeller">
        Vendido e entregue por <span className="store">{productData?.store}</span>
      </span>
      <Tabs productData={productData} />
      <Shipping />
    </ProductInfoContainer>
  );
};

export default ProductInfo;
