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
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = require("../../../index");
var styled_components_1 = __importDefault(require("styled-components"));
var colors_json_1 = __importDefault(require("../../../colors.json"));
var react_1 = require("react");
var content_component_1 = require("./content.component");
function ContentBox(props) {
    var _a = (0, react_1.useState)(props.hidden), shown = _a[0], setShown = _a[1];
    function getFlexBasis() {
        if (!props.flexBasis)
            return undefined;
        switch (props.flexBasis) {
            case index_1.ContentBoxWidth.None:
                return '0';
            case index_1.ContentBoxWidth.Third:
                return "calc(100% * (1 / 3) - ".concat(content_component_1.CONTENT_GAP, ")");
            case index_1.ContentBoxWidth.Half:
                return "calc(100% * (1 / 2) - ".concat(content_component_1.CONTENT_GAP, ")");
            case index_1.ContentBoxWidth.Full:
                return "calc(100%)";
            default:
                return props.flexBasis;
        }
    }
    return ((0, jsx_runtime_1.jsxs)(ContentBoxWrapper, __assign({ flexGrow: props.flexGrow, flexBasis: getFlexBasis() }, { children: [props.title && (0, jsx_runtime_1.jsx)(ContentBoxTitle, __assign({ shown: shown }, { children: (0, jsx_runtime_1.jsxs)("h2", __assign({ onClick: function () { return setShown(function (prevState) { return !prevState; }); } }, { children: [(0, jsx_runtime_1.jsx)("i", { className: 'ri-arrow-down-s-line' }), props.title] })) })), shown && (0, jsx_runtime_1.jsx)(ContentBoxStyled, { children: props.loading !== true ? props.children : (0, jsx_runtime_1.jsx)(ContentLoading, { children: (0, jsx_runtime_1.jsx)("div", { className: 'loader' }) }) })] })));
}
exports.default = ContentBox;
var ContentBoxWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-grow: ", ";\n  flex-basis: ", ";\n"], ["\n  flex-grow: ", ";\n  flex-basis: ", ";\n"])), function (props) { return props.flexGrow || 2; }, function (props) { return props.flexBasis || '0'; });
var ContentBoxTitle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n\n  h2 {\n    display: inline-block;\n    font-size: 1.4em;\n    padding: 0;\n    margin: 5px;\n    cursor: pointer;\n\n    i {\n      display: inline-block;\n      transition: transform 0.1s linear;\n      transform: rotate(", ");\n    }\n  }\n"], ["\n  color: ", ";\n\n  h2 {\n    display: inline-block;\n    font-size: 1.4em;\n    padding: 0;\n    margin: 5px;\n    cursor: pointer;\n\n    i {\n      display: inline-block;\n      transition: transform 0.1s linear;\n      transform: rotate(", ");\n    }\n  }\n"])), colors_json_1.default['font-header-2'], function (props) { return props.shown ? '0' : '-90deg'; });
var ContentBoxStyled = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 8px;\n  padding: 15px;\n\n  hr {\n    border: 1px solid ", ";\n    margin: 0.5em 0 1em 0;\n    padding: 0;\n  }\n\n  h2 {\n    font-size: 1.4em;\n    color: ", ";\n    padding: 0;\n    margin: 0.5em 0;\n  }\n\n  h3 {\n    font-size: 1em;\n    color: ", ";\n    text-transform: uppercase;\n    padding: 0;\n    margin: 0.5em 0;\n  }\n\n  p {\n    margin: 5px 0;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 8px;\n  padding: 15px;\n\n  hr {\n    border: 1px solid ", ";\n    margin: 0.5em 0 1em 0;\n    padding: 0;\n  }\n\n  h2 {\n    font-size: 1.4em;\n    color: ", ";\n    padding: 0;\n    margin: 0.5em 0;\n  }\n\n  h3 {\n    font-size: 1em;\n    color: ", ";\n    text-transform: uppercase;\n    padding: 0;\n    margin: 0.5em 0;\n  }\n\n  p {\n    margin: 5px 0;\n  }\n"])), colors_json_1.default['ui-background-3'], colors_json_1.default['app-bg-opaque'], colors_json_1.default['font-header-2'], colors_json_1.default['font-text-2']);
var ContentLoading = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border: 6px solid ", ";\n  border-radius: 4px;\n  padding: 6px;\n  width: 100px;\n  position: relative;\n  margin: 20px auto 35px auto;\n\n  :before {\n    content: '';\n    width: 21px;\n    height: 15px;\n    border-bottom: 6px solid ", ";\n    border-right: 6px solid ", ";\n    border-radius: 4px;\n    position: absolute;\n    bottom: -15px;\n    right: 15px;\n    transform: rotate(35deg);\n    background-color: ", ";\n  }\n\n  .loader {\n    width: 8px;\n    height: 60px;\n    display: block;\n    left: -14px;\n    position: relative;\n    border-radius: 4px;\n    box-sizing: border-box;\n    animation: animation 3s step-start infinite;\n  }\n\n  @keyframes animation {\n    0% {\n      box-shadow: 20px 0 transparent, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    20% {\n      box-shadow: 20px 0 ", ", 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    40% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    60% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 transparent, 100px 0 transparent;\n    }\n    80% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 ", ", 100px 0 transparent;\n    }\n    100% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 ", ", 100px 0 ", ";\n    }\n  }\n"], ["\n  border: 6px solid ", ";\n  border-radius: 4px;\n  padding: 6px;\n  width: 100px;\n  position: relative;\n  margin: 20px auto 35px auto;\n\n  :before {\n    content: '';\n    width: 21px;\n    height: 15px;\n    border-bottom: 6px solid ", ";\n    border-right: 6px solid ", ";\n    border-radius: 4px;\n    position: absolute;\n    bottom: -15px;\n    right: 15px;\n    transform: rotate(35deg);\n    background-color: ", ";\n  }\n\n  .loader {\n    width: 8px;\n    height: 60px;\n    display: block;\n    left: -14px;\n    position: relative;\n    border-radius: 4px;\n    box-sizing: border-box;\n    animation: animation 3s step-start infinite;\n  }\n\n  @keyframes animation {\n    0% {\n      box-shadow: 20px 0 transparent, 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    20% {\n      box-shadow: 20px 0 ", ", 40px 0 transparent, 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    40% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 transparent, 80px 0 transparent, 100px 0 transparent;\n    }\n    60% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 transparent, 100px 0 transparent;\n    }\n    80% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 ", ", 100px 0 transparent;\n    }\n    100% {\n      box-shadow: 20px 0 ", ", 40px 0 ", ", 60px 0 ", ", 80px 0 ", ", 100px 0 ", ";\n    }\n  }\n"])), colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['ui-background-3'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1'], colors_json_1.default['text-1']);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
