import styled, { css } from 'styled-components';
import colors from '../../colors.json';
import { ButtonDto, ButtonImageOrientation, ButtonStyleDto, ButtonType, UsedButton, ValueType } from '../../index';

export const URL = process.env.NODE_ENV === 'production' ? 'https://changemyavatarparams.com' : 'http://localhost:8080';

interface ParameterButtonProps {
    button: ButtonDto;
    buttonStyle: ButtonStyleDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (usedParameter: UsedButton) => void;
    flexBasis?: string;
}

export default function ParameterButton(props: ParameterButtonProps) {

    function onClick(value?: number) {
        if (props.onClick) {
            switch (props.button.buttonType) {
                case ButtonType.Button:
                    if (!props.active) props.onClick({buttonId: props.button.id, value: props.button.value});
                    break;
                case ButtonType.Toggle:
                    props.onClick({buttonId: props.button.id, value: props.active ? props.button.valueAlt : props.button.value});
                    break;
                case ButtonType.Slider:
                    props.onClick({buttonId: props.button.id, value: value});
                    break;
            }
        }
    }

    if (props.button.buttonType === ButtonType.Slider) {
        return (<ParameterSliderStyled type="range" step={1} flexBasis={props.flexBasis} disabled={!!props.disabled} className={props.buttonStyle.className}
                                       onClick={(e: any) => onClick(e.target.value)}
                                       min={props.button.valueType === ValueType.Float ? (Number(props.button.value) * 100) : props.button.value}
                                       max={props.button.valueType === ValueType.Float ? (Number(props.button.valueAlt) * 100) : props.button.valueAlt} />);
    }

    return (<ParameterButtonStyled flexBasis={props.flexBasis} disabled={!!props.disabled} className={props.buttonStyle.className} onClick={() => onClick()}>
        {props.button.image && <ParameterButtonPicture src={URL + '/' + props.button.image} imageOrientation={props.button.imageOrientation} />}
        {props.button.label && <ParameterButtonLabel>{props.button.label}</ParameterButtonLabel>}
        <ActiveOverlay active={!!props.active} />
    </ParameterButtonStyled>);
}

function imageOrientationToAspectRatio(imageOrientation: ButtonImageOrientation): string {
    switch (imageOrientation) {
        case ButtonImageOrientation.Square:
            return '4/3';
        case ButtonImageOrientation.Vertical:
            return '3/4';
        case ButtonImageOrientation.Horizontal:
        default:
            return '16/9';
    }
}

const ParameterButtonStyled = styled.div<{ flexBasis?: string, disabled: boolean }>`
  flex-basis: ${props => props.flexBasis ? props.flexBasis : '100%'};
  align-self: flex-start;
  text-align: center;
  padding: 0;
  min-height: 4.5em;
  min-width: 180px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &.buttonStyle-1 {
    background: ${colors['button-bg']};
    border: 2px solid ${colors['button-border']};
    border-radius: 8px;
    transition: 0.2s linear;

    :hover {
      transform: scale(1.02) perspective(1px);
      background: ${colors['button-hover-bg']};
      border: 2px solid ${colors['button-hover-border']};
    }
  }

  &.buttonStyle-2 {
    background: ${colors['button-2-bg']};
    border: 2px solid ${colors['button-2-border']};
    border-radius: 8px;
    transition: 0.2s linear;

    :hover {
      transform: scale(1.02) perspective(1px);
      background: ${colors['button-2-hover-bg']};
      border: 2px solid ${colors['button-2-hover-border']};
    }
  }

  ${props => props.disabled ? disabledParamStyle : null};
`;

const disabledParamStyle = css`
  pointer-events: none;
  cursor: initial;
  filter: saturate(0.5%);
`;

const ActiveOverlay = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
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

          background: linear-gradient(10deg, transparent 0%, transparent 50%, rgba(144, 160, 164, 0.16) 50%, transparent 70%, transparent 100%) 0px 0px / 400% 400%;
          animation: 1s overlayAfter 3s linear infinite;

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

const ParameterButtonLabel = styled.div`
  padding: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParameterButtonPicture = styled.div<{ src: string, imageOrientation: ButtonImageOrientation }>`
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  margin: 0;
  padding: 0;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const ParameterSliderStyled = styled.input<{ flexBasis?: string, disabled: boolean }>`
  flex-basis: ${props => props.flexBasis ? props.flexBasis : '100%'};
  align-self: flex-start;
  padding: 4px;
  height: 36px;
  min-width: 180px;
  width: 100%;
  //cursor: pointer;
  //overflow: hidden;
  border-radius: 8px;

  -webkit-appearance: none;
  background: ${colors['input-bg']};

  ::-webkit-slider-thumb {
    height: 26px;
    width: 20px;
    border-radius: 4px;
  }

  &.buttonStyle-1 {
    background: ${colors['button-bg']};
    border: 2px solid ${colors['button-border']};
    border-radius: 8px;

    &::-webkit-slider-thumb {
      background: ${colors['button-border']};

      :hover {
        background: ${colors['button-hover-border']};
      }
    }
  }

  &.buttonStyle-2 {
    background: ${colors['button-2-bg']};
    border: 2px solid ${colors['button-2-border']};
    border-radius: 8px;

    &::-webkit-slider-thumb {
      background: ${colors['button-2-hover-bg']};

      :hover {
        background: ${colors['button-2-hover-border']};
      }
    }
  }

  ${props => props.disabled ? disabledParamStyle : null};
`;
