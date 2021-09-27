import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/Theme';
import IconButton from '../components/IconButton/IconButton';
import { GlobalStyle } from '../styles/GlobalStyle';
import { AiOutlinePlus } from 'react-icons/ai';

interface ButtonProps {
  onClick?: () => void;
  backgroundColor: string;
}

export const IconButtonEx = ({ backgroundColor }: ButtonProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <IconButton onClick={() => {}} backgroundColor={backgroundColor}>
        <AiOutlinePlus />
      </IconButton>
      <GlobalStyle />
    </ThemeProvider>
  );
};
