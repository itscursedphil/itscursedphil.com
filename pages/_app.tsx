import React from 'react';
import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { layout } from 'styled-system';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: white;
    color: black;
    font-size: 16px;
    width: 100%;
    ${() => layout({ height: ['auto', '100%'] })}
    margin: 0;
    padding: 0;
    display: flex;
  }

  #__next, main {
    display: flex;
    width: 100%;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={{}}>
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
};

export default MyApp;
