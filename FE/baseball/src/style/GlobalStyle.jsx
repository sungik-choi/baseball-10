import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const fonts = css`
  @font-face {
    font-family: "Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

const variables = css`
  :root {
    /* Size */
    --width: 1200px;
    --height: 768px;
    --border-radius: 12px;
    --border-size: 4px;
    --button-shadow: 8px;
    --team-list-width: 80%;
    --team-list-min-width: 960px; /* 1200 * 80% */
    --team-list-min-height: 614px; /* 768 * 80% */

    /* Color */
    --white: #fff;
    --black: #1c1e27;
    --gray-1: #e3e7ea;
    --gray-2: #8d9596;
    --orange: #f29c04;
    --orange-shadow: #e07a0c;

    /* Typography */
    --text-xxl: 3rem;
    --text-xl: 2rem;
    --text-lg: 1.5rem;
    --text-md: 1.25rem;
    --text-base: 1rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
  ${variables}

  * {
    font-family: "Regular";
    font-size: 1rem;
  }

  html, body {
    width: 100%;
    height: 100%;
    min-width: var(--width);
  }

  a {
    display: block;
    text-decoration: none;
    color: var(--black);
    &:active {
      color: var(--black);
    }
  }

  h1, h2, h3 {
    font-family: "Bold";
  }

  button {
    cursor: pointer;
    outline: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
