import React from 'react';
import type { NextPage } from 'next';
import { Eczar } from 'next/font/google';
import Head from 'next/head';
import styled from 'styled-components';
import { space } from 'styled-system';

import Box from '../components/Box';
import Heading from '../components/Heading';
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
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const ListItem = styled.li`
  ${({ theme }) => space({ mr: [4], theme })}

  &:last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  font-family: sans-serif;
  color: inherit;
  text-decoration: none;
  letter-spacing: 0.05em;
  font-size: 0.8em;

  &:visited {
    color: inherit;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
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
        <meta
          name="description"
          content="Exploring art through code, sound and image."
        />
      </Head>
      <Box display={['block', 'flex']} width={1}>
        <Box
          display="flex"
          width={[1, 1 / 2]}
          bg="black"
          height={['180px', 'auto']}
          flexShrink={0}
          position="relative"
          px={[4, 5]}
          py={[4, 5]}
        >
          <Canvas id="background" />
        </Box>
        <Box
          width={[1, 1 / 2]}
          px={[4, 5]}
          py={[4, 5]}
          flexShrink={0}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <Heading
              as="h3"
              mt={0}
              fontWeight="normal"
              fontSize={['2.4rem', '2.8rem', '4rem']}
              lineHeight="1.2em"
            >
              Exploring art through code, sound and image.
            </Heading>
          </Box>
          <Box>
            <List>
              <ListItem>
                <Link
                  href="https://www.instagram.com/lghtbrkr/"
                  title="Music on Instagram"
                  target="_blank"
                >
                  Instagram
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="https://github.com/itscursedphil/"
                  title="Code on Github"
                  target="_blank"
                >
                  Github
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
