import styled from 'styled-components';
import { MouseEvent, useMemo } from 'react';
import { ParameterSlider } from './parameterSlider.component';
import { ParameterButton } from './parameterButton.component';
import { ButtonDTO, ButtonTypeSchema, ThemeDTO, UseButtonDTO } from '../../../src';

interface LayoutButtonProps {
  theme: ThemeDTO;
  button: ButtonDTO;
  value?: string | number | boolean;
  exp?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>, useButton: UseButtonDTO) => void;
}

export function LayoutButton({ theme, button, value, exp, onClick }: LayoutButtonProps) {

  const enoughExp = useMemo(() => {
    if (!button.useCost) return true;
    if (exp === undefined) return true;
    return exp >= button.useCost;
  }, [button.useCost, exp])

  const disabled = !enoughExp;

  function parameterElement() {
    switch (button.buttonType) {
      case ButtonTypeSchema.Values.Button:
      case ButtonTypeSchema.Values.Toggle:
        return <ParameterButton theme={theme} button={button} value={value} enoughExp={enoughExp} disabled={disabled} onClick={onClick} />;
      case ButtonTypeSchema.Values.Slider:
        return <ParameterSlider theme={theme} button={button} value={value} enoughExp={enoughExp} disabled={disabled} onClick={onClick} />;
    }
  }

  return (<LayoutButtonStyled className={'layoutButton'}>
    {parameterElement()}
  </LayoutButtonStyled>);
}

const LayoutButtonStyled = styled.div`
  width: 100%;
  margin-bottom: 20px;
  break-inside: avoid-column;
  position: relative;
`;
