import styled from 'styled-components';
import {
  flexbox,
  layout,
  position,
  space,
  typography,
  display,
  color,
  zIndex,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
  DisplayProps,
  ColorProps,
  ZIndexProps
} from 'styled-system';

type StyleProps = FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  TypographyProps &
  DisplayProps &
  ColorProps &
  ZIndexProps;

export const Box = styled.div<StyleProps>`
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
  ${display}
  ${color}
  ${zIndex}
`;
