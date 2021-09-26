import CSS from 'csstype';
import { ProductControlsContainer } from './ProductControls.styles';
import { IProductData } from '../../interfaces/IProductData';

interface IProductControls {
  style: CSS.Properties;
  productData: IProductData | undefined;
}

const ProductControls = ({ style }: IProductControls) => {
  return (
    <ProductControlsContainer style={style}>
      <span>Controls</span>
    </ProductControlsContainer>
  );
};

export default ProductControls;
