import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import colors from '../../colors.json';
import { ButtonImageOrientation, ButtonType, ParameterValueType } from '../../index';
import expOrb from '../images/expOrb.png';
export const URL = process.env.NODE_ENV === 'production' ? 'https://changemyavatarparams.com' : 'http://localhost:8080';
export default function ParameterButton(props) {
    function onClick(value) {
        if (props.onClick) {
            switch (props.button.buttonType) {
                case ButtonType.Button:
                    if (!props.active)
                        props.onClick({ buttonId: props.button.id, value: props.button.value });
                    break;
                case ButtonType.Toggle:
                    props.onClick({ buttonId: props.button.id, value: props.active ? props.button.valueAlt : props.button.value });
                    break;
                case ButtonType.Slider:
                    if (value === undefined)
                        return;
                    props.onClick({ buttonId: props.button.id, value: value });
                    break;
            }
        }
    }
    function useCostUsable() {
        if (props.useCostParameter && props.button.useCost) {
            return props.useCostParameter.value - props.button.useCost > Number(props.useCostParameter.controlParameter.valuePrimary);
        }
        return true;
    }
    function imageUrl() {
        if (props.button.image?.urlPath.indexOf('blob:') === 0) {
            return props.button.image?.urlPath;
        }
        else {
            return URL + '/' + props.button.image?.urlPath;
        }
    }
    if (props.button.buttonType === ButtonType.Slider) {
        return (_jsxs(UseCostWrapper, { children: [_jsxs(SliderWrapper, { children: [props.button.label && _jsx(ParameterSliderLabel, { children: props.button.label }), _jsx(ParameterSliderStyled, { type: "range", step: 1, disabled: !!props.disabled || !useCostUsable(), className: props.buttonStyle.className, onClick: (e) => onClick(e.target.value), defaultValue: typeof props.value === 'number' ? props.value : undefined, min: props.button.valueType === ParameterValueType.Float ? (Number(props.button.value) * 100) : props.button.value, max: props.button.valueType === ParameterValueType.Float ? (Number(props.button.valueAlt) * 100) : props.button.valueAlt || undefined })] }), props.button.useCost && _jsx(UseCostIcon, { position: "top", background: expOrb, usable: useCostUsable(), children: props.button.useCost.toString() })] }));
    }
    return (_jsxs(UseCostWrapper, { children: [_jsxs(ParameterButtonStyled, { disabled: !!props.disabled || !useCostUsable(), className: `${props.buttonStyle.className} ${props.active ? 'active' : ''}`, onClick: () => onClick(), children: [props.button.image?.urlPath && _jsx(ParameterButtonPicture, { src: imageUrl(), imageOrientation: props.button.imageOrientation || ButtonImageOrientation.Square }), props.button.label && _jsx(ParameterButtonLabel, { children: props.button.label }), _jsx(ActiveOverlay, { active: !!props.active })] }), props.button.useCost && _jsx(UseCostIcon, { position: "bottom", background: expOrb, usable: useCostUsable(), children: props.button.useCost.toString() })] }));
}
function imageOrientationToAspectRatio(imageOrientation) {
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
const ParameterButtonStyled = styled.div `
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

    :hover, &.active {
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

    :hover, &.active {
      transform: scale(1.02) perspective(1px);
      background: ${colors['button-2-hover-bg']};
      border: 2px solid ${colors['button-2-hover-border']};
    }
  }

  ${props => props.disabled ? disabledParamStyle : null};
`;
const disabledParamStyle = css `
  pointer-events: none;
  cursor: initial;
  filter: saturate(0.5%);
`;
const ActiveOverlay = styled.div `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${props => {
    if (props.active) {
        return css `
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
const ParameterButtonLabel = styled.div `
  padding: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ParameterButtonPicture = styled.div `
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  margin: 0;
  padding: 0;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;
const SliderWrapper = styled.div `
  display: inline-flex;
  flex-direction: column;
  width: 100%;
`;
const ParameterSliderLabel = styled.div `
  padding: 5px;
  margin: 0;
  align-items: center;
`;
const ParameterSliderStyled = styled.input `
  padding: 4px;
  height: 36px;
  min-width: 180px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  -webkit-appearance: none;
  background: ${colors['input-bg']};


  // todo style thumb
  ::-webkit-slider-thumb {
    height: 30px;
    width: 30px;
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
const UseCostWrapper = styled.div `
  position: relative;
`;
const UseCostIcon = styled.div `
  position: absolute;
  ${props => props.position === 'top' ? css `top: 10px;` : css `bottom: 5px;`};
  right: 10px;
  padding-right: 18px;
  background: url(${props => props.background}) center right no-repeat;
  background-size: 14px;
  color: ${props => props.usable ? '#2ec92e' : '#dd3322'};
  text-shadow: 0 0 3px black;
  pointer-events: none;
`;
