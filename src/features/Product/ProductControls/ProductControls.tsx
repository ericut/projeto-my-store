import CSS from 'csstype';
import { useEffect, useState, memo } from 'react';
import { ProductControlsContainer } from './ProductControls.styles';
import { IProductData } from '../../../interfaces/IProductData';
import { IShoppingCart } from '../../../interfaces/IShoppingCart';
import ColorSelect from '../../../components/ColorSelect/ColorSelect';
import RadioCombo from '../../../components/RadioCombo/RadioCombo';
import QuantitySelect from '../../../components/QuantitySelect/QuantitySelect';
import Button from '../../../components/Button/Button';

interface IProductControls {
  style: CSS.Properties;
  productData: IProductData | undefined;
  productSelected: IShoppingCart;
  handleChanger: (obj: IShoppingCart) => void;
  handleSubmit: () => void;
}

const ProductControls = ({ style, productData, productSelected, handleChanger, handleSubmit }: IProductControls) => {
  const [productColor, setProductColor] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productPayment, setProductPayment] = useState('');
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    handleChanger({
      ...productSelected,
      color: productColor,
      size: productSize,
      payment: productPayment,
      quantity: productQuantity,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleChanger, productColor, productSize, productPayment, productQuantity]);

  return (
    <ProductControlsContainer style={style}>
      <ColorSelect productData={productData} handleChanger={setProductColor} />
      <RadioCombo radioData={productData?.sizes} title={'Tamanho'} handleChanger={setProductSize} />
      <RadioCombo radioData={productData?.payment} title={'Pagamento'} handleChanger={setProductPayment} />
      <QuantitySelect handleChanger={setProductQuantity} maxQuantity={10} />
      <span className="productControlButtonContainer">
        <Button primaryColor onClick={() => handleSubmit()}>
          Comprar
        </Button>
      </span>
    </ProductControlsContainer>
  );
};

export default memo(ProductControls);
