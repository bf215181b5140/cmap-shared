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
exports.InputType = exports.ButtonType = exports.ValueType = exports.ParameterRole = exports.ClientTier = exports.FieldOption = exports.TierDto = exports.ParameterDto = exports.ButtonDto = exports.LayoutDto = exports.AvatarDto = exports.ClientDto = void 0;
// -- Classes -- //
var BaseDto = /** @class */ (function () {
    function BaseDto() {
        this.id = null;
    }
    return BaseDto;
}());
var BaseParentDto = /** @class */ (function (_super) {
    __extends(BaseParentDto, _super);
    function BaseParentDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BaseParentDto;
}(BaseDto));
var ClientDto = /** @class */ (function (_super) {
    __extends(ClientDto, _super);
    function ClientDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientDto;
}(BaseDto));
exports.ClientDto = ClientDto;
var AvatarDto = /** @class */ (function (_super) {
    __extends(AvatarDto, _super);
    function AvatarDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AvatarDto;
}(BaseParentDto));
exports.AvatarDto = AvatarDto;
var LayoutDto = /** @class */ (function (_super) {
    __extends(LayoutDto, _super);
    function LayoutDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LayoutDto;
}(BaseParentDto));
exports.LayoutDto = LayoutDto;
var ButtonDto = /** @class */ (function (_super) {
    __extends(ButtonDto, _super);
    function ButtonDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ButtonDto;
}(BaseParentDto));
exports.ButtonDto = ButtonDto;
var ParameterDto = /** @class */ (function (_super) {
    __extends(ParameterDto, _super);
    function ParameterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParameterDto;
}(BaseParentDto));
exports.ParameterDto = ParameterDto;
var TierDto = /** @class */ (function (_super) {
    __extends(TierDto, _super);
    function TierDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.avatars = 0;
        _this.layouts = 0;
        _this.buttons = 0;
        _this.exp = false;
        _this.hp = false;
        return _this;
    }
    return TierDto;
}(BaseDto));
exports.TierDto = TierDto;
var FieldOption = /** @class */ (function () {
    function FieldOption() {
    }
    return FieldOption;
}());
exports.FieldOption = FieldOption;
// -- Enums -- //
var ClientTier;
(function (ClientTier) {
    ClientTier["Basic"] = "basic";
    ClientTier["Advance"] = "advance";
    ClientTier["Premium"] = "premium";
    ClientTier["Unlocked"] = "unlocked";
})(ClientTier = exports.ClientTier || (exports.ClientTier = {}));
var ParameterRole;
(function (ParameterRole) {
    ParameterRole["Exp"] = "exp";
    ParameterRole["HP"] = "hp";
})(ParameterRole = exports.ParameterRole || (exports.ParameterRole = {}));
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
