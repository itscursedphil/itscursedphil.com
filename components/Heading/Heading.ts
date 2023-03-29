import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface HeadingProps extends SpaceProps, ColorProps, TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = styled.h1<HeadingProps>`
  ${space}
  ${color}
  ${typography}
`;

export default Heading;
