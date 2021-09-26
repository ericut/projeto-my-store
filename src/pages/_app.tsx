import { useState } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  // fazer contextapi para gerenciar a troca do darkmode <3
  // fazer contextapi para gerenciar a troca do darkmode <3
  // fazer contextapi para gerenciar a troca do darkmode <3
  // fazer contextapi para gerenciar a troca do darkmode <3
  // fazer contextapi para gerenciar a troca do darkmode <3
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Trocar Tema</button>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
