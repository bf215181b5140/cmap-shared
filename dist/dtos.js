"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonType = exports.ValueType = exports.ButtonDto = exports.LayoutDto = exports.AvatarDto = exports.ClientDto = void 0;
var ClientDto = /** @class */ (function () {
    function ClientDto() {
    }
    return ClientDto;
}());
exports.ClientDto = ClientDto;
var AvatarDto = /** @class */ (function () {
    function AvatarDto() {
    }
    return AvatarDto;
}());
exports.AvatarDto = AvatarDto;
var LayoutDto = /** @class */ (function () {
    function LayoutDto() {
    }
    return LayoutDto;
}());
exports.LayoutDto = LayoutDto;
var ButtonDto = /** @class */ (function () {
    function ButtonDto() {
    }
    return ButtonDto;
}());
exports.ButtonDto = ButtonDto;
var ValueType;
(function (ValueType) {
    ValueType["Int"] = "int";
    ValueType["Float"] = "float";
    ValueType["Boolean"] = "boolean";
})(ValueType = exports.ValueType || (exports.ValueType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType["Button"] = "button";
    ButtonType["Slider"] = "slider";
    ButtonType["Toggle"] = "toggle";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
