/* eslint-disable @next/next/no-img-element */
import CSS from 'csstype';
import { ProductImageContainer } from './ProductImage.styles';
import { IProductData } from '../../interfaces/IProductData';

interface IProductImage {
  style: CSS.Properties;
  productData: IProductData | undefined;
}

const ProductImage = ({ style, productData }: IProductImage) => {
  return (
    <ProductImageContainer style={style}>
      <div className="productImage">
        <img src={productData?.image} alt={productData?.name} title={productData?.name} />
      </div>
    </ProductImageContainer>
  );
};

export default ProductImage;
