import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { layout } from 'styled-system';

import Box from '../components/Box';
import {
  draw as drawCanvas,
  initialize as initializeCanvas,
} from '../lib/canvas';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: white;
    color: black;
    font-family: 'Eczar', serif;
    font-size: 16px;
    width: 100%;
    ${() => layout({ height: ['auto', '100%'] })}
    margin: 0;
    padding: 0;
    display: flex;
  }

  #___gatsby, #gatsby-focus-wrapper {
    display: flex;
    width: 100%;
  }
`;

const Canvas = styled.canvas`
  width: 100%;
`;

const IndexPage = () => {
  React.useEffect(() => {
    const ctx = initializeCanvas();
    drawCanvas(ctx);
  }, []);

  return (
    <ThemeProvider theme={{}}>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <title>itscursedphil</title>
        </Helmet>
        <GlobalStyle />
        <Box display={['block', 'flex']} width={1}>
          <Box
            display="flex"
            width={[1, 1 / 2]}
            bg="black"
            height={['180px', 'auto']}
            flexShrink={0}
          >
            <Canvas id="background" />
          </Box>
          <Box width={[1, 1 / 2]} px={[4]} py={[4]} flexShrink={0}>
            <p style={{ margin: 0 }}>itscursedphil.com</p>
          </Box>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default IndexPage;
