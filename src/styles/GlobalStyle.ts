import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Open Sans', sans-serif;
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.text};
      transition: 0.3s all;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  `;
