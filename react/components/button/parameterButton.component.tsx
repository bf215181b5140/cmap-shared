import styled, { css } from 'styled-components';
import React, { useMemo, useState } from 'react';
import { ButtonBaseStyle } from './button.style';
import { ParameterButtonDTO, ParameterButtonTypeSchema, imageOrientationToAspectRatio, imageUrlPathToUrl, ThemeDTO, trimNumberDecimals, UseParameterButtonDTO, ImageOrientation } from '../../../src';
import { ExpIcon } from '../expIcon/expIcon.component';

interface ParameterButtonProps {
  theme: ThemeDTO;
  parameterButton: ParameterButtonDTO;
  value?: string | number | boolean;
  enoughExp: boolean;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, useParameterButton: UseParameterButtonDTO) => void;
}

export function ParameterButtonComponent({ theme, parameterButton, value, enoughExp, disabled, onClick }: ParameterButtonProps) {

  const [buttonUsed, setButtonUsed] = useState(false);

  const active = useMemo(() => {
    // if value is float then we trim it to 3 decimals for comparison (vrc floats aren't accurate and it converts 0.3 into something like 0.3000000001124749325)
    if (typeof value === 'number' && !Number.isInteger(value)) return trimNumberDecimals(value) === parameterButton.value;
    return value === parameterButton.value;
  }, [parameterButton.value, value]);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (buttonUsed) return;

    if (onClick) {
      switch (parameterButton.buttonType) {
        case ParameterButtonTypeSchema.Values.Button:
          if (!active) onClick(event, { id: parameterButton.id, value: parameterButton.value });
          break;
        case ParameterButtonTypeSchema.Values.Toggle:
          onClick(event, { id: parameterButton.id, value: (active && parameterButton.valueAlt !== null) ? parameterButton.valueAlt : parameterButton.value });
          break;
      }
    }

    setButtonUsed(true);
    setTimeout(() => setButtonUsed(false), 100);
  }

  return (<ParameterButtonStyled className={'parameterButton'} themeDto={theme} aria-readonly={disabled} aria-current={active}
                                 onClick={onClickInternal} buttonUsed={buttonUsed}>
    {parameterButton.image && <ParameterButtonPicture src={imageUrlPathToUrl(parameterButton.image.urlPath)} imageOrientation={parameterButton.imageOrientation} />}
    {parameterButton.label && <ParameterButtonLabel>{parameterButton.label}</ParameterButtonLabel>}
    <ActiveOverlay active={active} />
    {parameterButton.useCost && <ExpIcon enoughExp={enoughExp} exp={parameterButton.useCost} />}
  </ParameterButtonStyled>);
}

const ParameterButtonStyled = styled(ButtonBaseStyle)<{ buttonUsed: boolean }>`
  min-height: 72px;
  overflow: hidden;
  position: relative;

  ${props => props.buttonUsed && css`transform: scale(1) !important;`}
`;

const ParameterButtonPicture = styled.div<{ src: string, imageOrientation: ImageOrientation }>`
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const ParameterButtonLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ActiveOverlay = styled.div<{ active: boolean }>`
  position: absolute;
  inset: 0;

  ${props => {
    if (props.active) {
      return css`
        background: linear-gradient(45deg, transparent 0%, transparent 25%, rgba(144, 160, 164, 0.20) 50%, transparent 50%, transparent 100%) 0 0 / 400% 400%;
        animation: overlay 3s linear infinite;

        @keyframes overlay {
          from {
            background-position: 100% 0
          }
          to {
            background-position: 0 100%
          }
        }

        :after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;

          background: linear-gradient(10deg, transparent 0%, transparent 50%, rgba(144, 160, 164, 0.06) 50%, transparent 80%, transparent 100%) 0px 0px / 400% 400%;
          animation: 3s overlayAfter 2.4s linear infinite;

          @keyframes overlayAfter {
            from {
              background-position: 0 100%
            }
            to {
              background-position: 100% 0
            }
          }
        }
      `;
    }
  }}
`;
