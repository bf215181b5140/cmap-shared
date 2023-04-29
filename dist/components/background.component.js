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
function Background(_a) {
    var background = _a.background;
    return ((0, jsx_runtime_1.jsx)(BackgroundStyled, { className: background.className }));
}
exports.default = Background;
var BackgroundStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  \n  &.bg-gradient-1 {\n    background-color: #4158D0;\n    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  }\n  \n  &.bg-gradient-2 {\n    background-color: #0093E9;\n    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);\n  }\n  \n  &.bg-gradient-3 {\n    background-color: #8EC5FC;\n    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n  }\n"], ["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  \n  &.bg-gradient-1 {\n    background-color: #4158D0;\n    background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);\n  }\n  \n  &.bg-gradient-2 {\n    background-color: #0093E9;\n    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);\n  }\n  \n  &.bg-gradient-3 {\n    background-color: #8EC5FC;\n    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n  }\n"])));
var templateObject_1;
