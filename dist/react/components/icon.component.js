"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Icon;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
function Icon({ icon, color }) {
    return ((0, jsx_runtime_1.jsx)(IconStyled, { className: icon, color: color }));
}
const IconStyled = styled_components_1.default.i `
  vertical-align: text-bottom;
  margin-right: 2px;
  color: ${props => props.color ? props.color : theme_1.theme.colors.font.icon};
`;
