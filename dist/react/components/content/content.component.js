"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTENT_GAP = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
function Content(props) {
    return ((0, jsx_runtime_1.jsx)(ContentStyled, __assign({ flexDirection: props.flexDirection }, { children: props.children })));
}
exports.default = Content;
exports.CONTENT_GAP = '20px';
var ContentStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 20px;\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  gap: ", ";\n"], ["\n  margin: 20px;\n  display: flex;\n  flex-direction: ", ";\n  flex-wrap: wrap;\n  gap: ", ";\n"])), function (props) { return props.flexDirection ? props.flexDirection : 'row'; }, exports.CONTENT_GAP);
var templateObject_1;
