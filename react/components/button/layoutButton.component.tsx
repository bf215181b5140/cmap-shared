import styled from 'styled-components';
import { MouseEvent } from 'react';
import ParameterButton from './parameter.button';
import { ButtonDTO, ThemeDTO } from '../../../src';

interface LayoutButtonProps {
  theme: ThemeDTO;
  button: ButtonDTO;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export default function LayoutButton({ theme, button, onClick }: LayoutButtonProps) {

  return (<LayoutButtonStyled onClick={onClick}>
    <ParameterButton button={button} cmapTheme={theme} />
  </LayoutButtonStyled>);
}

const LayoutButtonStyled = styled.div.attrs(() => ({ className: 'layoutButton' }))`
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid-column;
`;
