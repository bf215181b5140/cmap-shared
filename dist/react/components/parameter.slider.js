"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
function ParameterSlider({ value, min, max, disabled, className, onClick }) {
    const inputRef = (0, react_1.useRef)(null);
    const [dragging, setDragging] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (dragging) {
            document.addEventListener('mousemove', calculateInputRange);
            document.addEventListener('mouseup', handleMouseUp);
        }
        else {
            document.removeEventListener('mousemove', calculateInputRange);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', calculateInputRange);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging]);
    const calculateInputRange = (0, react_1.useCallback)((event) => {
        const input = inputRef?.current;
        if (!input)
            return;
        const progressBarRect = input.getBoundingClientRect();
        const clickX = event.clientX - (progressBarRect.left + 6);
        const percentage = ((clickX / (progressBarRect.width - 12)) * 100);
        const newValue = Math.round(Math.min(100, Math.max(0, percentage)));
        onClick(newValue.toString());
    }, []);
    const handleMouseUp = (0, react_1.useCallback)((event) => {
        calculateInputRange(event);
        setDragging(false);
    }, []);
    const handleMouseDown = (0, react_1.useCallback)((event) => {
        calculateInputRange(event);
        setDragging(true);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { type: "range", min: min, max: max, step: "1", defaultValue: value, style: { display: 'none' } }), (0, jsx_runtime_1.jsx)(ParameterSliderStyled, { onMouseDown: handleMouseDown, ref: inputRef, className: className + (disabled ? 'readOnly' : undefined), children: (0, jsx_runtime_1.jsx)("div", { style: { width: `${value}%` } }) })] }));
}
exports.default = ParameterSlider;
;
const ParameterSliderStyled = styled_components_1.default.div `
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
