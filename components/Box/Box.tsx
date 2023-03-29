import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

const Box = styled.div<
  SpaceProps & ColorProps & LayoutProps & FlexboxProps & PositionProps
>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
`;

export default Box;
