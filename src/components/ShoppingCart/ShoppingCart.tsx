import { useContext } from 'react';
import Image from 'next/image';
import { ShoppingCartContainer } from './ShoppingCart.styles';
import { ColorModeContext } from '../../context/ColorMode.context';

const ShoppingCart = () => {
  const { isDarkTheme } = useContext(ColorModeContext);

  return (
    <ShoppingCartContainer>
      {isDarkTheme ? (
        <img src="/imgs/icon_shoppingbag_white.svg" alt="Shopping Bag" />
      ) : (
        <img src="/imgs/icon_shoppingbag.svg" alt="Shopping Bag" />
      )}
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
