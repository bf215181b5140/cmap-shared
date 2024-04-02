import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface ParameterSliderProps {
    value: number;
    min: number;
    max: number;
    disabled: boolean;
    className: string;
    onClick: (value: string) => void;
}

export default function ParameterSlider({ value, min, max, disabled, className, onClick }: ParameterSliderProps) {

    const inputRef = useRef<any>(null);
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

    const calculateInputRange = useCallback((event: any) => {
        const input = inputRef?.current;
        if (!input) return;
        const progressBarRect = input.getBoundingClientRect();
        const clickX = event.clientX - (progressBarRect.left + 6);
        const percentage = ((clickX / (progressBarRect.width - 12)) * 100);
        const newValue = Math.round(Math.min(100, Math.max(0, percentage)));
        onClick(newValue.toString());
    }, []);

    const handleMouseUp = useCallback((event: any) => {
        calculateInputRange(event);
        setDragging(false);
    }, []);

    const handleMouseDown = useCallback((event: any) => {
        calculateInputRange(event);
        setDragging(true);
    }, []);

    return (<div>
        <input type="range" min={min} max={max} step="1" defaultValue={value} style={{ display: 'none' }} />
        <ParameterSliderStyled onMouseDown={handleMouseDown} ref={inputRef} className={className + (disabled ? 'readOnly' : undefined)}>
            <div style={{ width: `${value}%` }}></div>
        </ParameterSliderStyled>
    </div>);
};

const ParameterSliderStyled = styled.div`
  border-radius: 7px;
  transition: 0.1s linear;
  height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;
  justify-content: flex-start;

  > div {
    background: ${props => props.theme.colors.buttonPrimary.hoverBg};
    border-radius: 7px;
    height: 30px;
  }

  :hover {
    background: ${props => props.theme.colors.input.bg};
    border-color: ${props => props.theme.colors.input.border};

    div {
      background: ${props => props.theme.colors.input.hoverBorder};
    }
  }

  &.buttonStyle-1 {
    background: ${props => props.theme.colors.buttonPrimary.bg};
    border: 2px solid ${props => props.theme.colors.buttonPrimary.border};
    border-radius: 8px;

    :hover {
      > div {
        background: ${props => props.theme.colors.buttonPrimary.hoverBorder};
      }
    }
  }

  &.buttonStyle-2 {
    background: ${props => props.theme.colors.buttonSecondary.bg};
    border: 2px solid ${props => props.theme.colors.buttonSecondary.border};
    border-radius: 8px;

    :hover {
      > div {
        background: ${props => props.theme.colors.buttonSecondary.hoverBorder};
      }
    }
  }

  &.readOnly {
    pointer-events: none;
    filter: saturate(0%);
  }
`;
