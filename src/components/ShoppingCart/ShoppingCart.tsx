import styled from 'styled-components';
import Image from 'next/image';
import ShoppingBagImage from './Images/icon_shoppingbag.svg';

const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShoppingCart = () => {
  return (
    <ShoppingCartContainer>
      <Image src={ShoppingBagImage} alt="Shopping Bag" />
    </ShoppingCartContainer>
  );
};

export default ShoppingCart;
