import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    text: string;
    textinvert: string;
    colors: {
      buttontext: string;
      primary: string;
      secondary: string;
    };
  }
}
