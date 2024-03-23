"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var theme_1 = require("../theme");
function Icon(_a) {
    var icon = _a.icon, color = _a.color;
    return ((0, jsx_runtime_1.jsx)(IconStyled, { className: icon, color: color }));
}
exports.default = Icon;
var IconStyled = styled_components_1.default.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  vertical-align: text-bottom;\n  margin-right: 2px;\n  color: ", ";\n"], ["\n  vertical-align: text-bottom;\n  margin-right: 2px;\n  color: ", ";\n"])), function (props) { return props.color ? props.color : theme_1.theme.colors.font.icon; });
var templateObject_1;
