import styled, { css } from 'styled-components';
import React, { useMemo, useState } from 'react';
import { ButtonBaseStyle } from './button.style';
import { ButtonDTO, ButtonTypeSchema, imageOrientationToAspectRatio, imageUrlPathToUrl, ThemeDTO, trimNumberDecimals, UseButtonDTO, ImageOrientation } from '../../../src';
import { ExpIcon } from '../expIcon/expIcon.component';

interface ParameterButtonProps {
  theme: ThemeDTO;
  button: ButtonDTO;
  value?: string | number | boolean;
  enoughExp: boolean;
  disabled: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>, useButton: UseButtonDTO) => void;
}

export function ParameterButton({ theme, button, value, enoughExp, disabled, onClick }: ParameterButtonProps) {

  const [buttonUsed, setButtonUsed] = useState(false);

  const active = useMemo(() => {
    // if value is float then we trim it to 3 decimals for comparison (vrc floats aren't accurate and it converts 0.3 into something like 0.3000000001124749325)
    if (typeof value === 'number' && !Number.isInteger(value)) return trimNumberDecimals(value) === button.value;
    return value === button.value;
  }, [button.value, value]);

  function onClickInternal(event: React.MouseEvent<HTMLDivElement>) {
    if (buttonUsed) return;

    if (onClick) {
      switch (button.buttonType) {
        case ButtonTypeSchema.Values.Button:
          if (!active) onClick(event, { id: button.id, value: button.value });
          break;
        case ButtonTypeSchema.Values.Toggle:
          onClick(event, { id: button.id, value: (active && button.valueAlt !== null) ? button.valueAlt : button.value });
          break;
      }
    }

    setButtonUsed(true);
    setTimeout(() => setButtonUsed(false), 100);
  }

  return (<ParameterButtonStyled className={'parameterButton'} themeDto={theme} aria-readonly={disabled} aria-current={active}
                                 onClick={onClickInternal} buttonUsed={buttonUsed}>
    {button.image && <ParameterButtonPicture src={imageUrlPathToUrl(button.image.urlPath)} imageOrientation={button.imageOrientation} />}
    {button.showLabel && <ParameterButtonLabel>{button.label}</ParameterButtonLabel>}
    <ActiveOverlay active={active} />
    {button.useCost && <ExpIcon enoughExp={enoughExp} exp={button.useCost} />}
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
