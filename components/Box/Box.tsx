import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';

const Box = styled.div<SpaceProps & ColorProps & LayoutProps & FlexboxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
`;

export default Box;
