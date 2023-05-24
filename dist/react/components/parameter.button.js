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
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var colors_json_1 = __importDefault(require("../../colors.json"));
var index_1 = require("../../index");
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
                    props.onClick({ buttonId: props.button.id, value: value });
                    break;
            }
        }
    }
    if (props.button.buttonType === index_1.ButtonType.Slider) {
        return ((0, jsx_runtime_1.jsx)(ParameterSliderStyled, { type: "range", step: 1, flexBasis: props.flexBasis, disabled: !!props.disabled, className: props.buttonStyle.className, onClick: function (e) { return onClick(e.target.value); }, min: props.button.valueType === index_1.ValueType.Float ? (Number(props.button.value) * 100) : props.button.value, max: props.button.valueType === index_1.ValueType.Float ? (Number(props.button.valueAlt) * 100) : props.button.valueAlt }));
    }
    return ((0, jsx_runtime_1.jsxs)(ParameterButtonStyled, __assign({ flexBasis: props.flexBasis, disabled: !!props.disabled, className: props.buttonStyle.className, onClick: function () { return onClick(); } }, { children: [props.button.image && (0, jsx_runtime_1.jsx)(ParameterButtonPicture, { src: exports.URL + '/' + props.button.image, imageOrientation: props.button.imageOrientation }), props.button.label && (0, jsx_runtime_1.jsx)(ParameterButtonLabel, { children: props.button.label }), (0, jsx_runtime_1.jsx)(ActiveOverlay, { active: !!props.active })] })));
}
exports.default = ParameterButton;
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
var ParameterButtonStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-basis: ", ";\n  align-self: flex-start;\n  text-align: center;\n  padding: 0;\n  min-height: 4.5em;\n  min-width: 180px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n\n  &.buttonStyle-1 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n    transition: 0.2s linear;\n\n    :hover {\n      transform: scale(1.02) perspective(1px);\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n\n  &.buttonStyle-2 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n    transition: 0.2s linear;\n\n    :hover {\n      transform: scale(1.02) perspective(1px);\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n\n  ", ";\n"], ["\n  flex-basis: ", ";\n  align-self: flex-start;\n  text-align: center;\n  padding: 0;\n  min-height: 4.5em;\n  min-width: 180px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n\n  &.buttonStyle-1 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n    transition: 0.2s linear;\n\n    :hover {\n      transform: scale(1.02) perspective(1px);\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n\n  &.buttonStyle-2 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n    transition: 0.2s linear;\n\n    :hover {\n      transform: scale(1.02) perspective(1px);\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n\n  ", ";\n"])), function (props) { return props.flexBasis ? props.flexBasis : '100%'; }, colors_json_1.default['button-bg'], colors_json_1.default['button-border'], colors_json_1.default['button-hover-bg'], colors_json_1.default['button-hover-border'], colors_json_1.default['button-2-bg'], colors_json_1.default['button-2-border'], colors_json_1.default['button-2-hover-bg'], colors_json_1.default['button-2-hover-border'], function (props) { return props.disabled ? disabledParamStyle : null; });
var disabledParamStyle = (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  pointer-events: none;\n  cursor: initial;\n  filter: saturate(0.5%);\n"], ["\n  pointer-events: none;\n  cursor: initial;\n  filter: saturate(0.5%);\n"])));
var ActiveOverlay = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  \n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  \n  ", "\n"])), function (props) {
    if (props.active) {
        return (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background: linear-gradient(45deg, transparent 0%, transparent 25%, rgba(144, 160, 164, 0.20) 50%, transparent 50%, transparent 100%) 0 0 / 400% 400%;\n        animation: overlay 3s linear infinite;\n\n        @keyframes overlay {\n          from {\n            background-position: 100% 0\n          }\n          to {\n            background-position: 0 100%\n          }\n        }\n        \n        :after {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n\n          background: linear-gradient(10deg, transparent 0%, transparent 50%, rgba(144, 160, 164, 0.16) 50%, transparent 70%, transparent 100%) 0px 0px / 400% 400%;\n          animation: 1s overlayAfter 3s linear infinite;\n\n          @keyframes overlayAfter {\n            from {\n              background-position: 0 100%\n            }\n            to {\n              background-position: 100% 0\n            }\n          }\n        }\n      "], ["\n        background: linear-gradient(45deg, transparent 0%, transparent 25%, rgba(144, 160, 164, 0.20) 50%, transparent 50%, transparent 100%) 0 0 / 400% 400%;\n        animation: overlay 3s linear infinite;\n\n        @keyframes overlay {\n          from {\n            background-position: 100% 0\n          }\n          to {\n            background-position: 0 100%\n          }\n        }\n        \n        :after {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 0;\n          right: 0;\n\n          background: linear-gradient(10deg, transparent 0%, transparent 50%, rgba(144, 160, 164, 0.16) 50%, transparent 70%, transparent 100%) 0px 0px / 400% 400%;\n          animation: 1s overlayAfter 3s linear infinite;\n\n          @keyframes overlayAfter {\n            from {\n              background-position: 0 100%\n            }\n            to {\n              background-position: 100% 0\n            }\n          }\n        }\n      "])));
    }
});
var ParameterButtonLabel = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 1.5em;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  padding: 1.5em;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var ParameterButtonPicture = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  aspect-ratio: ", ";\n  margin: 0;\n  padding: 0;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n"], ["\n  width: 100%;\n  aspect-ratio: ", ";\n  margin: 0;\n  padding: 0;\n  background: url(", ") no-repeat center;\n  background-size: cover;\n"])), function (props) { return imageOrientationToAspectRatio(props.imageOrientation); }, function (props) { return props.src; });
var ParameterSliderStyled = styled_components_1.default.input(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  flex-basis: ", ";\n  align-self: flex-start;\n  padding: 4px;\n  height: 36px;\n  min-width: 180px;\n  width: 100%;\n  //cursor: pointer;\n  //overflow: hidden;\n  border-radius: 8px;\n\n  -webkit-appearance: none;\n  background: ", ";\n\n  ::-webkit-slider-thumb {\n    height: 26px;\n    width: 20px;\n    border-radius: 4px;\n  }\n\n  &.buttonStyle-1 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n\n    &::-webkit-slider-thumb {\n      background: ", ";\n\n      :hover {\n        background: ", ";\n      }\n    }\n  }\n\n  &.buttonStyle-2 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n\n    &::-webkit-slider-thumb {\n      background: ", ";\n\n      :hover {\n        background: ", ";\n      }\n    }\n  }\n\n  ", ";\n"], ["\n  flex-basis: ", ";\n  align-self: flex-start;\n  padding: 4px;\n  height: 36px;\n  min-width: 180px;\n  width: 100%;\n  //cursor: pointer;\n  //overflow: hidden;\n  border-radius: 8px;\n\n  -webkit-appearance: none;\n  background: ", ";\n\n  ::-webkit-slider-thumb {\n    height: 26px;\n    width: 20px;\n    border-radius: 4px;\n  }\n\n  &.buttonStyle-1 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n\n    &::-webkit-slider-thumb {\n      background: ", ";\n\n      :hover {\n        background: ", ";\n      }\n    }\n  }\n\n  &.buttonStyle-2 {\n    background: ", ";\n    border: 2px solid ", ";\n    border-radius: 8px;\n\n    &::-webkit-slider-thumb {\n      background: ", ";\n\n      :hover {\n        background: ", ";\n      }\n    }\n  }\n\n  ", ";\n"])), function (props) { return props.flexBasis ? props.flexBasis : '100%'; }, colors_json_1.default['input-bg'], colors_json_1.default['button-bg'], colors_json_1.default['button-border'], colors_json_1.default['button-border'], colors_json_1.default['button-hover-border'], colors_json_1.default['button-2-bg'], colors_json_1.default['button-2-border'], colors_json_1.default['button-2-hover-bg'], colors_json_1.default['button-2-hover-border'], function (props) { return props.disabled ? disabledParamStyle : null; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
