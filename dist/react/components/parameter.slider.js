"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParameterSlider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
function ParameterSlider({ value, step, min, max, disabled, className, onClick }) {
    const inputRef = (0, react_1.useRef)(null);
    const width = ((value - min) / (max - min)) * 100;
    const calculateInputRange = (0, react_1.useCallback)((event) => {
        const input = inputRef?.current;
        if (!input)
            return;
        const progressBarRect = input.getBoundingClientRect();
        const clickX = event.clientX - (progressBarRect.left + 6);
        const percentage = ((clickX / (progressBarRect.width - 12)) * 100);
        let newValue = min + (percentage * ((max - min) / 100));
        // round to int
        if (step === 1) {
            newValue = Math.round(newValue);
        }
        onClick(newValue.toString());
    }, []);
    const handleMouseDown = (0, react_1.useCallback)((event) => {
        calculateInputRange(event);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "range", min: min, max: max, step: step, defaultValue: value, style: { display: 'none' } }), (0, jsx_runtime_1.jsx)(ParameterSliderStyled, { onMouseDown: handleMouseDown, ref: inputRef, className: className + (disabled ? 'readOnly' : ''), children: (0, jsx_runtime_1.jsx)("div", { style: { width: `${width}%` } }) })] }));
}
;
const ParameterSliderStyled = styled_components_1.default.div `
  border-radius: 7px;
  transition: 0.1s linear;
  height: 44px;
  min-width: 180px;
  display: block;
  padding: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 100%;

  > div {
    background: ${props => props.theme.colors.buttons.primary.hoverBg};
    border-radius: 7px;
    height: 100%;
  }

  :hover {
    background: ${props => props.theme.colors.input.bg};
    border-color: ${props => props.theme.colors.input.border};

    div {
      background: ${props => props.theme.colors.input.hoverBorder};
    }
  }

  &.layoutStyle-1 {
    background: ${props => props.theme.colors.buttons.primary.bg};
    border: 2px solid ${props => props.theme.colors.buttons.primary.border};
    border-radius: 8px;

    :hover {
      > div {
        background: ${props => props.theme.colors.buttons.primary.hoverBorder};
      }
    }
  }

  &.layoutStyle-2 {
    background: ${props => props.theme.colors.buttons.secondary.bg};
    border: 2px solid ${props => props.theme.colors.buttons.secondary.border};
    border-radius: 8px;

    :hover {
      > div {
        background: ${props => props.theme.colors.buttons.secondary.hoverBorder};
      }
    }
  }

  &.readOnly {
    pointer-events: none;
    filter: saturate(0%);
  }
`;
