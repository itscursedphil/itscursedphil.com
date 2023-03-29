import React from 'react';
import type { NextPage } from 'next';
import { Eczar } from 'next/font/google';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import {
  draw as drawCanvas,
  initialize as initializeCanvas,
} from '../lib/canvas';

const ezcar = Eczar({
  weight: ['400', '700'],
  subsets: ['latin'],
});

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

const Home: NextPage = () => {
  const [invert, setInvert] = React.useState(false);

  React.useEffect(() => {
    const ctx = initializeCanvas();
    drawCanvas(ctx);
  }, []);

  React.useEffect(() => {
    const invertOnMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const winWidth = window.innerWidth;

      const nextInvert = mouseX > winWidth * 0.5;

      if (nextInvert !== invert) setInvert(nextInvert);
    };
    window.addEventListener('mousemove', invertOnMouseMove);

    return () => window.removeEventListener('mousemove', invertOnMouseMove);
  }, [invert]);

  return (
    <main className={ezcar.className}>
      <Head>
        <title>itscursedphil</title>
      </Head>
      <GlobalStyle />
      <Container style={{ backgroundColor: invert ? 'white' : 'black' }} />
      <Canvas id="background" />
      <Container>
        <Title style={{ color: invert ? 'black' : 'white' }}>
          itscursedphil
        </Title>
      </Container>
    </main>
  );
};

export default Home;
