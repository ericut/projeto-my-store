import CSS from 'csstype';
import Image from 'next/image';
//
import DonaModaLogo from '../../../public/imgs/logo_donamoda.svg';
import UserBar from '../../components/UserBar/UserBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { HeaderContainer, Logo, UserNavigation } from './Header.styles';

type IHeader = {
  style: CSS.Properties;
};

const Header = ({ style }: IHeader) => {
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
