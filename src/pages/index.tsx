import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

import { initialize, draw } from "../lib/canvas";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background-color: black;
    /* color: rgba(255, 255, 255, .05); */
    color: white;
    font-family: 'Eczar', serif;
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  letter-spacing: 0.8em;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 700;

  @media only screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const IndexPage = () => {
  React.useEffect(() => {
    const ctx = initialize();
    draw(ctx, true);
  }, []);

  return (
    <main>
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
      <Canvas id="background" />
      <Container>
        <Title>itscursedphil</Title>
      </Container>
    </main>
  );
};

export default IndexPage;
