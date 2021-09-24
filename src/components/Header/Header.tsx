import styled from 'styled-components';
import Image from 'next/image';
//
import DonaModaLogo from '../../../public/imgs/logo_donamoda.svg';
import UserBar from '../../components/UserBar/UserBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const HeaderContainer = styled.div`
  max-width: 100%;
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  max-width: 100%;
  width: 176px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserNavigation = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ style }: any) => {
  return (
    <HeaderContainer style={style}>
      <Logo>
        <Image src={DonaModaLogo} alt="Dona Moda" />
      </Logo>
      <UserNavigation>
        <UserBar />
        <ShoppingCart />
      </UserNavigation>
    </HeaderContainer>
  );
};

export default Header;
