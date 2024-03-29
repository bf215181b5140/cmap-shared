"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../../../index");
const styled_components_1 = __importDefault(require("styled-components"));
const colors_json_1 = __importDefault(require("../../../colors.json"));
const react_1 = require("react");
const content_component_1 = require("./content.component");
function ContentBox(props) {
    const [shown, setShown] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (typeof props.show === 'boolean') {
            setShown(props.show);
        }
    }, [props.show]);
    function getFlexBasis() {
        if (!props.flexBasis)
            return undefined;
        switch (props.flexBasis) {
            case index_1.ContentBoxWidth.None:
                return '0';
            case index_1.ContentBoxWidth.Third:
                return `calc(100% * (1 / 3) - ${content_component_1.CONTENT_GAP})`;
            case index_1.ContentBoxWidth.Half:
                return `calc(100% * (1 / 2) - ${content_component_1.CONTENT_GAP})`;
            case index_1.ContentBoxWidth.Full:
                return `calc(100%)`;
            default:
                return props.flexBasis;
        }
    }
    return ((0, jsx_runtime_1.jsxs)(ContentBoxWrapper, { flexGrow: props.flexGrow, flexBasis: getFlexBasis(), children: [props.title && (0, jsx_runtime_1.jsx)(ContentBoxTitle, { shown: shown, children: (0, jsx_runtime_1.jsxs)("h2", { onClick: () => setShown(prevState => !prevState), children: [(0, jsx_runtime_1.jsx)("i", { className: 'ri-arrow-down-s-line' }), props.title] }) }), shown && (0, jsx_runtime_1.jsx)(ContentBoxStyled, { children: props.loading !== true ? props.children : (0, jsx_runtime_1.jsx)(ContentLoading, { children: (0, jsx_runtime_1.jsx)("div", { className: 'loader' }) }) })] }));
}
exports.default = ContentBox;
const ContentBoxWrapper = styled_components_1.default.div `
  flex-grow: ${props => props.flexGrow || 2};
  flex-basis: ${props => props.flexBasis || '0'};
`;
const ContentBoxTitle = styled_components_1.default.div `
  color: ${colors_json_1.default['font-header-2']};

  h2 {
    display: inline-block;
    font-size: 1.4em;
    padding: 0;
    margin: 5px;
    cursor: pointer;
    text-shadow: 0 0 3px black;

    i {
      display: inline-block;
      transition: transform 0.1s linear;
      transform: rotate(${props => props.shown ? '0' : '-90deg'});
    }
  }
`;
const ContentBoxStyled = styled_components_1.default.div `
  background-color: ${colors_json_1.default['ui-background-3']};
  border-radius: 8px;
  padding: 15px;

  hr {
    border: 1px solid ${colors_json_1.default['app-bg-opaque']};
    margin: 0.5em 0 1em 0;
    padding: 0;
  }
  
  h1 {
    text-shadow: 0 0 3px black;
  }

  h2 {
    font-size: 1.4em;
    color: ${colors_json_1.default['font-header-2']};
    padding: 0;
    margin: 0.5em 0;
    text-shadow: 0 0 3px black;
  }

  h3 {
    font-size: 1em;
    color: ${colors_json_1.default['font-text-2']};
    text-transform: uppercase;
    padding: 0;
    margin: 0.5em 0;
  }

  p {
    margin: 5px 0;
  }
`;
const ContentLoading = styled_components_1.default.div `
  border: 6px solid ${colors_json_1.default['text-1']};
  border-radius: 4px;
  padding: 6px;
  width: 100px;
  position: relative;
  margin: 20px auto 35px auto;

  :before {
    content: '';
    width: 21px;
    height: 15px;
    border-bottom: 6px solid ${colors_json_1.default['text-1']};
    border-right: 6px solid ${colors_json_1.default['text-1']};
    border-radius: 4px;
    position: absolute;
    bottom: -15px;
    right: 15px;
    transform: rotate(35deg);
    background-color: ${colors_json_1.default['ui-background-3']};
  }

  .loader {
    width: 8px;
    height: 60px;
    display: block;
    left: -14px;
    position: relative;
    border-radius: 4px;
    box-sizing: border-box;
    animation: animation 3s step-start infinite;
  }

  @keyframes animation {
    0% {
      box-shadow: 20px 0 transparent, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    20% {
      box-shadow: 20px 0 ${colors_json_1.default['text-1']}, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    40% {
      box-shadow: 20px 0 ${colors_json_1.default['text-1']}, 40px 0 ${colors_json_1.default['text-1']}, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;
    }
    60% {
      box-shadow: 20px 0 ${colors_json_1.default['text-1']}, 40px 0 ${colors_json_1.default['text-1']}, 60px 0 ${colors_json_1.default['text-1']}, 80px 0 transparent, 100px 0 transparent;
    }
    80% {
      box-shadow: 20px 0 ${colors_json_1.default['text-1']}, 40px 0 ${colors_json_1.default['text-1']}, 60px 0 ${colors_json_1.default['text-1']}, 80px 0 ${colors_json_1.default['text-1']}, 100px 0 transparent;
    }
    100% {
      box-shadow: 20px 0 ${colors_json_1.default['text-1']}, 40px 0 ${colors_json_1.default['text-1']}, 60px 0 ${colors_json_1.default['text-1']}, 80px 0 ${colors_json_1.default['text-1']}, 100px 0 ${colors_json_1.default['text-1']};
    }
  }
`;
