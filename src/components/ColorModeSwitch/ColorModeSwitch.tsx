import React from 'react';
import { ColorModeSwitchContainer } from './ColorModeSwitch.styles';

interface IColorModeSwitch {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
}

const ColorModeSwitch = ({ isDarkTheme, setIsDarkTheme }: IColorModeSwitch) => {
  return (
    <ColorModeSwitchContainer>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Trocar Tema</button>
    </ColorModeSwitchContainer>
  );
};

export default ColorModeSwitch;
