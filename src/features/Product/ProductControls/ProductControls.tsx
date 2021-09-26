import CSS from 'csstype';
import { ProductControlsContainer } from './ProductControls.styles';
import { IProductData } from '../../../interfaces/IProductData';
import ColorSelect from '../../../components/ColorSelect/ColorSelect';
import RadioCombo from '../../../components/RadioCombo/RadioCombo';

interface IProductControls {
  style: CSS.Properties;
  productData: IProductData | undefined;
}

const ProductControls = ({ style, productData }: IProductControls) => {
  return (
    <ProductControlsContainer style={style}>
      <ColorSelect productData={productData} />
      <RadioCombo radioData={productData?.sizes} title={'Tamanho'} />
      <RadioCombo radioData={productData?.payment} title={'Pagamento'} />
    </ProductControlsContainer>
  );
};

export default ProductControls;
