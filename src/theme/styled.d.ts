import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string;
      secondary: string;
    };
    text: string;
    textinvert: string;
    textdark: string;
    borders: string;
    inputborder: string;
    colors: {
      buttontext: string;
      primary: string;
      secondary: string;
    };
  }
}
