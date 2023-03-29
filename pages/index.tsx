import React from 'react';
import type { NextPage } from 'next';
import { Eczar } from 'next/font/google';
import Head from 'next/head';
import styled from 'styled-components';

import Box from '../components/Box';
import {
  draw as drawCanvas,
  initialize as initializeCanvas,
  resize as resizeCanvas,
} from '../lib/canvas';

const ezcar = Eczar({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Canvas = styled.canvas`
  width: 100%;
`;

const Home: NextPage = () => {
  React.useEffect(() => {
    const ctx = initializeCanvas();

    drawCanvas(ctx);

    const doResizeCanvas = () => resizeCanvas(ctx);

    window.addEventListener('resize', doResizeCanvas);

    return () => window.removeEventListener('resize', doResizeCanvas);
  }, []);

  return (
    <main className={ezcar.className}>
      <Head>
        <title>itscursedphil</title>
      </Head>
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
    </main>
  );
};

export default Home;
