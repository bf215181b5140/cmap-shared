import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { ThemeDTO } from '../../../src';

export const ButtonBaseStyle = styled.div<{ themeDto: ThemeDTO }>`
  width: 100%;
  cursor: pointer;
  transition: 0.1s linear;
  border-radius: 8px;

  &[aria-readonly='true'] {
    pointer-events: none;
    filter: saturate(0%);
  }

  &.parameterButton[aria-current='true'], &.parameterButton:hover {
    transform: scale(1.05);
  }

  > .slider {
    transition: background 0.1s linear;
    border-radius: 6px;
  }

  ${props => groupThemes[props.themeDto.id]};
`;

const groupThemes: { [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
  vrcGreen: css`
    background: ${props => props.theme.colors.buttons.primary.bg};
    border: 2px solid ${props => props.theme.colors.buttons.primary.border};

    > .slider {
      background: ${props => props.theme.colors.buttons.primary.border};
    }

    &[aria-current='true'], :hover {
      background: ${props => props.theme.colors.buttons.primary.hoverBg};
      border-color: ${props => props.theme.colors.buttons.primary.hoverBorder};

      > .slider {
        background: ${props => props.theme.colors.buttons.primary.activeBorder};
      }
    }
  `,
  vrcGrey: css`
    background: ${props => props.theme.colors.buttons.secondary.bg};
    border: 2px solid ${props => props.theme.colors.buttons.secondary.border};

    > .slider {
      background: ${props => props.theme.colors.buttons.secondary.border};
    }

    &[aria-current='true'], :hover {
      background: ${props => props.theme.colors.buttons.secondary.hoverBg};
      border-color: ${props => props.theme.colors.buttons.secondary.hoverBorder};

      > .slider {
        background: ${props => props.theme.colors.buttons.secondary.hoverBorder};
      }
    }
  `
};