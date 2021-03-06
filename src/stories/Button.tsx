import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/Theme';
import Button from '../components/Button/Button';
import { GlobalStyle } from '../styles/GlobalStyle';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor: string;
}

export const ButtonEx = ({ label, backgroundColor }: ButtonProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button onClick={() => {}} backgroundColor={backgroundColor}>
        {label}
      </Button>
      <GlobalStyle />
    </ThemeProvider>
  );
};
