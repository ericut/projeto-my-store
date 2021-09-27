import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/Theme';
import RadioCombo from '../components/RadioCombo/RadioCombo';
import { GlobalStyle } from '../styles/GlobalStyle';

interface ButtonProps {
  title: string;
  color: string;
  radioData: string[];
  onClick?: () => void;
  handleChanger?: (value: string) => void;
}

export const RadioComboEx = ({ title, radioData, handleChanger, color }: ButtonProps) => {
  const data = radioData;
  function handleChangerSet() {
    console.log(handleChanger);
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <RadioCombo title={title} radioData={data} handleChanger={handleChangerSet} color={color} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
