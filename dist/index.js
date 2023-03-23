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
exports.FieldOption = exports.InputType = exports.ButtonType = exports.ValueType = exports.ButtonDto = exports.LayoutDto = exports.AvatarDto = exports.ClientDto = exports.ParentId = void 0;
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    return AvatarDto;
}(ParentId));
exports.AvatarDto = AvatarDto;
var LayoutDto = /** @class */ (function (_super) {
    __extends(LayoutDto, _super);
    function LayoutDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
    }
    return LayoutDto;
}(ParentId));
exports.LayoutDto = LayoutDto;
var ButtonDto = /** @class */ (function (_super) {
    __extends(ButtonDto, _super);
    function ButtonDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = null;
        return _this;
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
var InputType;
(function (InputType) {
    InputType["Text"] = "text";
    InputType["Button"] = "button";
    InputType["Checkbox"] = "checkbox";
    InputType["Date"] = "date";
    InputType["Email"] = "email";
    InputType["File"] = "file";
    InputType["Hidden"] = "hidden";
    InputType["Number"] = "number";
    InputType["Password"] = "password";
    InputType["Radio"] = "radio";
    InputType["Range"] = "range";
    InputType["Reset"] = "reset";
    InputType["Submit"] = "submit";
    InputType["Time"] = "time";
    InputType["Url"] = "url";
    InputType["Label"] = "label";
    InputType["Boolean"] = "boolean";
    InputType["Select"] = "select";
    InputType["Textarea"] = "textarea";
})(InputType = exports.InputType || (exports.InputType = {}));
var FieldOption = /** @class */ (function () {
    function FieldOption() {
    }
    return FieldOption;
}());
exports.FieldOption = FieldOption;
