import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface TextProps extends SpaceProps, ColorProps, TypographyProps {
  inline?: boolean;
}

const Text = styled.p.attrs<TextProps>(({ inline, ...props }) => ({
  as: inline ? 'span' : 'p',
  ...props,
}))<TextProps>`
  ${space}
  ${color}
  ${typography}
`;

export default Text;
