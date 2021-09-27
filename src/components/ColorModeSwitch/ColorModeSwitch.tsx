import { useContext } from 'react';
import { ColorModeSwitchContainer } from './ColorModeSwitch.styles';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ColorModeContext } from '../../context/ColorMode.context';

const ColorModeSwitch = () => {
  const { isDarkTheme, setIsDarkTheme } = useContext(ColorModeContext);
  return (
    <ColorModeSwitchContainer>
      <button className="colorModeSwitchButton" onClick={() => setIsDarkTheme(!isDarkTheme)}>
        {isDarkTheme ? <FiSun /> : <FiMoon />}
      </button>
    </ColorModeSwitchContainer>
  );
};

export default ColorModeSwitch;
