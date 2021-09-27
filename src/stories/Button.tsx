import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/Theme';
import Button from '../components/Button/Button';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  backgroundColor: string;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonEx = ({ label, backgroundColor }: ButtonProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Button onClick={() => {}} backgroundColor={backgroundColor}>
        {label}
      </Button>
    </ThemeProvider>
  );
};
