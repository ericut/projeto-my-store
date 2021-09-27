import { useContext } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/Theme';
import ColorModeSwitch from '../components/ColorModeSwitch/ColorModeSwitch';
import { ColorModeContext, ColorModeProvider } from '../context/ColorMode.context';

function AppProvider({ Component, pageProps }: AppProps) {
  const { isDarkTheme } = useContext(ColorModeContext);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <ColorModeSwitch />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

function Master({ Component, pageProps, router }: AppProps) {
  return (
    <ColorModeProvider>
      <AppProvider pageProps={pageProps} Component={Component} router={router} />
    </ColorModeProvider>
  );
}

export default Master;
