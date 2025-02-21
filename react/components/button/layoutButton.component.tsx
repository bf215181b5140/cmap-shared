import styled from 'styled-components';
import { MouseEvent, useMemo } from 'react';
import { ParameterSliderComponent } from './parameterSlider.component';
import { ParameterButtonComponent } from './parameterButton.component';
import { ParameterButtonDTO, ParameterButtonTypeSchema, ThemeDTO, UseParameterButtonDTO } from '../../../src';

interface LayoutButtonProps {
  theme: ThemeDTO;
  parameterButton: ParameterButtonDTO;
  value?: string | number | boolean;
  exp?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>, useButton: UseParameterButtonDTO) => void;
}

export function LayoutButtonComponent({ theme, parameterButton, value, exp, onClick }: LayoutButtonProps) {

  const enoughExp = useMemo(() => {
    if (!parameterButton.useCost) return true;
    if (exp === undefined) return true;
    return exp >= parameterButton.useCost;
  }, [parameterButton.useCost, exp])

  const disabled = !enoughExp;

  function parameterElement() {
    switch (parameterButton.buttonType) {
      case ParameterButtonTypeSchema.Values.Button:
      case ParameterButtonTypeSchema.Values.Toggle:
        return <ParameterButtonComponent theme={theme} parameterButton={parameterButton} value={value} enoughExp={enoughExp} disabled={disabled} onClick={onClick} />;
      case ParameterButtonTypeSchema.Values.Slider:
        return <ParameterSliderComponent theme={theme} parameterButton={parameterButton} value={value} enoughExp={enoughExp} disabled={disabled} onClick={onClick} />;
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
