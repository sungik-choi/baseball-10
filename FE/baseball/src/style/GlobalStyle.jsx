import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const fonts = css`
  @font-face {
    font-family: 'Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

const variables = css``;

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
  ${variables}
  /* other styles */
`;

export default GlobalStyle;
