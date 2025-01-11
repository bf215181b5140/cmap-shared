import styled from 'styled-components';
import { ButtonBaseStyle } from './button.style';
import React, { useEffect, useRef, useState } from 'react';
import { ButtonDTO, ThemeDTO, UseButtonDTO } from '../../../src';
import { ExpIcon } from '../expIcon/expIcon.component';

interface ParameterSliderProps {
  theme: ThemeDTO;
  button: ButtonDTO;
  value?: string | number | boolean;
  enoughExp: boolean;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, useButton: UseButtonDTO) => void;
}

export function ParameterSlider({ theme, button, value, enoughExp, disabled, onClick }: ParameterSliderProps) {

  const min = Number(button.value);
  const max = Number(button.valueAlt);
  const numberValue = typeof value === 'number' ? value : (max - ((max - min) / 2));
  const step = Math.abs(min - max) > 1 ? 1 : 0.01;

  const inputRef = useRef<any>(null);
  const [sliderValue, setSliderValue] = useState(numberValue);

  const width = ((sliderValue - min) / (max - min)) * 100;

  useEffect(() => setSliderValue(numberValue), [value]);

  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', calculateInputRange);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', calculateInputRange);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', calculateInputRange);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  function calculateInputRange(event: React.MouseEvent<HTMLDivElement> | MouseEvent, emit?: true) {
    const input = inputRef?.current;
    if (!input) return;
    const padding = 6; // padding + border
    const progressBarRect = input.getBoundingClientRect();
    const clickX = event.clientX - (progressBarRect.left + padding);
    const percentage = Math.min(100, Math.max(0, ((clickX / (progressBarRect.width - (2 * padding))) * 100)));
    let newValue = min + (percentage * ((max - min) / 100));
    // round to int
    if (step === 1) {
      newValue = Math.round(newValue);
    }
    setSliderValue(newValue);
    if (emit && onClick) onClick(event as any, { id: button.id, value: newValue });
  }

  function handleMouseUp(event: React.MouseEvent<HTMLDivElement> | MouseEvent) {
    calculateInputRange(event, true);
    setDragging(false);
  }

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement> | MouseEvent) {
    calculateInputRange(event);
    setDragging(true);
  }

  return (<>
    {button.showLabel && <ParameterSliderLabel>{button.label}</ParameterSliderLabel>}
    <ParameterSliderStyled className={'parameterSlider'} onMouseDown={handleMouseDown} ref={inputRef} themeDto={theme} aria-readonly={disabled}>
      <input type="range" min={min} max={max} step={step} defaultValue={numberValue} style={{ display: 'none' }} />
      <div className={'slider'} style={{ width: `${width}%` }} />
    </ParameterSliderStyled>
    {button.useCost && <ExpIcon enoughExp={enoughExp} exp={button.useCost} />}
  </>);
}

const ParameterSliderStyled = styled(ButtonBaseStyle)`
  height: 44px;
  padding: 4px;
  user-select: none;

  > .slider {
    height: 100%;
  }
`;

const ParameterSliderLabel = styled.div`
  margin: 0 20px 5px 20px;
  text-align: center;
`;
