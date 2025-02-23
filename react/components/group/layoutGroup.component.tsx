import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { MouseEvent } from 'react';
import { LayoutGroupGap } from '../layout/layout.component';
import { GroupDTO, GroupWidth, ThemeDTO } from '../../../src';
import { LayoutButtonWrapper } from '../button/layoutButtonWrapper.component';

interface LayoutGroupProps {
  theme: ThemeDTO;
  group: GroupDTO;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

export function LayoutGroup({ theme, group, onClick, children }: LayoutGroupProps) {

  const readonly = !onClick;

  return (<LayoutGroupStyled className={'layoutGroup'} themeDto={theme} width={group.width} onClick={onClick} aria-readonly={readonly}>
    {group.label && <h2 style={{ marginTop: '0' }}>{group.label}</h2>}
    <LayoutButtonWrapper>
      {children}
    </LayoutButtonWrapper>
  </LayoutGroupStyled>);
}

const LayoutGroupStyled = styled.div<{ themeDto: ThemeDTO, width: GroupWidth }>`
  padding: 15px;
  border-radius: 8px;

  &[aria-readonly='false'] {
    cursor: pointer;
    transition: 0.1s linear;

    :hover:not(:has(.layoutButton:hover, .newItem:hover)) {
      box-shadow: inset 0 0 0px 2px ${props => props.theme.colors.ui.highlight4};
    }
  }

  flex: ${props => {
    switch (props.width) {
      case 'None':
        return '1';
      case 'Third':
        return `calc(100% * (1 / 3) - ${LayoutGroupGap})`;
      case 'Half':
        return ` calc(100% * (1 / 2) - ${LayoutGroupGap})`;
      case 'Full':
        return ` calc(100%)`;
      default:
        return undefined;
    }
  }};

  ${props => groupThemes[props.themeDto.id]};
`;

const groupThemes: { [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
  vrcGreen: css`
    background: ${props => props.theme.colors.ui.background3};
  `,
  vrcGrey: css`
    background: ${props => props.theme.colors.ui.background3};
  `
};