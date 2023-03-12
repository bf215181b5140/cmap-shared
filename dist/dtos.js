"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonType = exports.ValueType = exports.ButtonDto = exports.LayoutDto = exports.AvatarDto = exports.ClientDto = exports.ParentId = void 0;
var ParentId = /** @class */ (function () {
    function ParentId() {
    }
    return ParentId;
}());
exports.ParentId = ParentId;
var ClientDto = /** @class */ (function () {
    function ClientDto() {
    }
    return ClientDto;
}());
exports.ClientDto = ClientDto;
var AvatarDto = /** @class */ (function (_super) {
    __extends(AvatarDto, _super);
    function AvatarDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AvatarDto;
}(ParentId));
exports.AvatarDto = AvatarDto;
var LayoutDto = /** @class */ (function (_super) {
    __extends(LayoutDto, _super);
    function LayoutDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LayoutDto;
}(ParentId));
exports.LayoutDto = LayoutDto;
var ButtonDto = /** @class */ (function (_super) {
    __extends(ButtonDto, _super);
    function ButtonDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ButtonDto;
}(ParentId));
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
