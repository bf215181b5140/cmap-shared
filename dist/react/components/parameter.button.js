"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
exports.default = ParameterButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importStar(require("styled-components"));
const colors_json_1 = __importDefault(require("../../colors.json"));
const index_1 = require("../../index");
const expOrb_png_1 = __importDefault(require("../images/expOrb.png"));
const parameter_slider_1 = __importDefault(require("./parameter.slider"));
exports.URL = process.env.NODE_ENV === 'production' ? 'https://changemyavatarparams.com' : 'http://localhost:8080';
function ParameterButton(props) {
    function onClick(value) {
        if (props.onClick) {
            switch (props.button.buttonType) {
                case index_1.ButtonType.Button:
                    if (!props.active)
                        props.onClick({ buttonId: props.button.id, value: props.button.value });
                    break;
                case index_1.ButtonType.Toggle:
                    props.onClick({ buttonId: props.button.id, value: props.active ? props.button.valueAlt : props.button.value });
                    break;
                case index_1.ButtonType.Slider:
                    if (value === undefined)
                        return;
                    props.onClick({ buttonId: props.button.id, value: value });
                    break;
            }
        }
    }
    function useCostUsable() {
        if (props.useCostParameter && props.button.useCost) {
            return props.useCostParameter.value - props.button.useCost >= 0;
        }
        return true;
    }
    function imageUrl() {
        if (props.button.image?.urlPath.indexOf('blob:') === 0) {
            return props.button.image.urlPath;
        }
        else {
            return exports.URL + '/' + props.button.image?.urlPath;
        }
    }
    if (props.button.buttonType === index_1.ButtonType.Slider) {
        return ((0, jsx_runtime_1.jsxs)(UseCostWrapper, { children: [(0, jsx_runtime_1.jsxs)(SliderWrapper, { children: [props.button.label && (0, jsx_runtime_1.jsx)(ParameterSliderLabel, { children: props.button.label }), (0, jsx_runtime_1.jsx)(parameter_slider_1.default, { disabled: !!props.disabled || !useCostUsable(), className: props.style.id, onClick: (value) => onClick(value), value: typeof props.value === 'number' ? props.value : 0, step: Math.abs(Number(props.button.value) - Number(props.button.valueAlt)) > 1 ? 1 : 0.01, min: Number(props.button.value), max: Number(props.button.valueAlt) })] }), props.button.useCost && (0, jsx_runtime_1.jsx)(UseCostIcon, { position: "top", background: expOrb_png_1.default, usable: useCostUsable(), children: props.button.useCost.toString() })] }));
    }
    return ((0, jsx_runtime_1.jsxs)(UseCostWrapper, { children: [(0, jsx_runtime_1.jsxs)(ParameterLayoutStyled, { disabled: !!props.disabled || !useCostUsable(), className: `${props.style.id} ${props.active ? 'active' : ''}`, onClick: () => onClick(), children: [props.button.image?.urlPath &&
                        (0, jsx_runtime_1.jsx)(ParameterButtonPicture, { src: imageUrl(), imageOrientation: props.button.imageOrientation || index_1.ButtonImageOrientation.Square }), props.button.label && (0, jsx_runtime_1.jsx)(ParameterButtonLabel, { children: props.button.label }), (0, jsx_runtime_1.jsx)(ActiveOverlay, { active: !!props.active })] }), props.button.useCost && (0, jsx_runtime_1.jsx)(UseCostIcon, { position: "bottom", background: expOrb_png_1.default, usable: useCostUsable(), children: props.button.useCost.toString() })] }));
}
function imageOrientationToAspectRatio(imageOrientation) {
    switch (imageOrientation) {
        case index_1.ButtonImageOrientation.Square:
            return '4/3';
        case index_1.ButtonImageOrientation.Vertical:
            return '3/4';
        case index_1.ButtonImageOrientation.Horizontal:
        default:
            return '16/9';
    }
}
const ParameterLayoutStyled = styled_components_1.default.div `
  text-align: center;
  padding: 0;
  min-height: 4.5em;
  min-width: 180px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &.layoutStyle-1 {
    background: ${colors_json_1.default['button-bg']};
    border: 2px solid ${colors_json_1.default['button-border']};
    border-radius: 8px;
    transition: 0.2s linear;

    :hover, &.active {
      transform: scale(1.02) perspective(1px);
      background: ${colors_json_1.default['button-hover-bg']};
      border: 2px solid ${colors_json_1.default['button-hover-border']};
    }
  }

  &.layoutStyle-2 {
    background: ${colors_json_1.default['button-2-bg']};
    border: 2px solid ${colors_json_1.default['button-2-border']};
    border-radius: 8px;
    transition: 0.2s linear;

    :hover, &.active {
      transform: scale(1.02) perspective(1px);
      background: ${colors_json_1.default['button-2-hover-bg']};
      border: 2px solid ${colors_json_1.default['button-2-hover-border']};
    }
  }

  ${props => props.disabled ? disabledParamStyle : null};
`;
const disabledParamStyle = (0, styled_components_1.css) `
  pointer-events: none;
  cursor: initial;
  filter: saturate(0.5%);
`;
const ActiveOverlay = styled_components_1.default.div `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${props => {
    if (props.active) {
        return (0, styled_components_1.css) `
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
const ParameterButtonLabel = styled_components_1.default.div `
  padding: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ParameterButtonPicture = styled_components_1.default.div `
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  margin: 0;
  padding: 0;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;
const SliderWrapper = styled_components_1.default.div `
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ParameterSliderLabel = styled_components_1.default.div `
  padding: 5px;
  margin: 0;
  align-items: center;
`;
const UseCostWrapper = styled_components_1.default.div `
  position: relative;
`;
const UseCostIcon = styled_components_1.default.div `
  position: absolute;
  ${props => props.position === 'top' ? (0, styled_components_1.css) `top: 10px;` : (0, styled_components_1.css) `bottom: 5px;`};
  right: 10px;
  padding-right: 18px;
  background: url(${props => props.background}) center right no-repeat;
  background-size: 14px;
  color: ${props => props.usable ? '#2ec92e' : '#dd3322'};
  text-shadow: 0 0 3px black;
  pointer-events: none;
`;
