import Image from 'next/image';
import ShoppingBagImage from './Images/icon_shoppingbag.svg';
import { ShoppingCartContainer } from './ShoppingCart.styles';

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <Image src={ShoppingBagImage} alt="Shopping Bag" />
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
