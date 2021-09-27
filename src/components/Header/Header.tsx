import { useContext } from 'react';
import CSS from 'csstype';
import UserBar from '../../components/UserBar/UserBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import { HeaderContainer, Logo, LogoImg, UserNavigation } from './Header.styles';
import { ColorModeContext } from '../../context/ColorMode.context';

interface IHeader {
  style: CSS.Properties;
}

const Header = ({ style }: IHeader) => {
  const { isDarkTheme } = useContext(ColorModeContext);
  return (
    <HeaderContainer style={style}>
      <Logo>
        {isDarkTheme ? (
          <LogoImg src="/imgs/logo_donamoda_white.svg" alt="Dona Moda" />
        ) : (
          <LogoImg src="/imgs/logo_donamoda.svg" alt="Dona Moda" />
        )}
      </Logo>
      <UserNavigation>
        <UserBar />
        <ShoppingCart />
      </UserNavigation>
    </HeaderContainer>
  );
};

export default Header;
