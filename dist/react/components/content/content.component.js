"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTENT_GAP = void 0;
exports.default = Content;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
function Content(props) {
    return ((0, jsx_runtime_1.jsx)(ContentStyled, { flexDirection: props.flexDirection, children: props.children }));
}
exports.CONTENT_GAP = '20px';
const ContentStyled = styled_components_1.default.div `
  margin: 20px;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  flex-wrap: wrap;
  gap: ${exports.CONTENT_GAP};
`;
