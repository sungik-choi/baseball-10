import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

const variables = css``;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}
  /* other styles */
`;

export default GlobalStyle;
