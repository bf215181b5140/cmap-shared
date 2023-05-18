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
exports.ContentBoxWidth = exports.InputType = exports.ButtonImageOrientation = exports.ButtonType = exports.ValueType = exports.ParameterRole = exports.ClientTier = exports.FieldOption = exports.FileUploadDto = exports.ButtonDto = exports.LayoutDto = exports.ControlParameterDto = exports.ParameterDto = exports.AvatarDto = exports.ClientDto = exports.ButtonStyleDto = exports.BackgroundDto = exports.TierDto = exports.RegistrationFormDto = exports.AvatarsPageDto = exports.ProfilePageDto = void 0;
var dtos_1 = require("./dtos");
Object.defineProperty(exports, "AvatarsPageDto", { enumerable: true, get: function () { return dtos_1.AvatarsPageDto; } });
Object.defineProperty(exports, "ProfilePageDto", { enumerable: true, get: function () { return dtos_1.ProfilePageDto; } });
// -- Classes -- //
var RegistrationFormDto = /** @class */ (function () {
    function RegistrationFormDto() {
    }
    return RegistrationFormDto;
}());
exports.RegistrationFormDto = RegistrationFormDto;
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
var TierDto = /** @class */ (function () {
    function TierDto() {
    }
    return TierDto;
}());
exports.TierDto = TierDto;
var BackgroundDto = /** @class */ (function () {
    function BackgroundDto() {
    }
    return BackgroundDto;
}());
exports.BackgroundDto = BackgroundDto;
var ButtonStyleDto = /** @class */ (function () {
    function ButtonStyleDto() {
    }
    return ButtonStyleDto;
}());
exports.ButtonStyleDto = ButtonStyleDto;
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
var ParameterDto = /** @class */ (function (_super) {
    __extends(ParameterDto, _super);
    function ParameterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParameterDto;
}(BaseParentDto));
exports.ParameterDto = ParameterDto;
var ControlParameterDto = /** @class */ (function (_super) {
    __extends(ControlParameterDto, _super);
    function ControlParameterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ControlParameterDto;
}(BaseParentDto));
exports.ControlParameterDto = ControlParameterDto;
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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = '/avatar/parameters/';
        _this.valueType = ValueType.Int;
        _this.buttonType = ButtonType.Button;
        _this.imageOrientation = ButtonImageOrientation.Horizontal;
        return _this;
    }
    return ButtonDto;
}(BaseParentDto));
exports.ButtonDto = ButtonDto;
var FileUploadDto = /** @class */ (function () {
    function FileUploadDto() {
    }
    return FileUploadDto;
}());
exports.FileUploadDto = FileUploadDto;
var FieldOption = /** @class */ (function () {
    function FieldOption() {
    }
    return FieldOption;
}());
exports.FieldOption = FieldOption;
// -- Enums -- //
var ClientTier;
(function (ClientTier) {
    ClientTier["Basic"] = "Basic";
    ClientTier["Standard"] = "Standard";
    ClientTier["Premium"] = "Premium";
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
var ButtonImageOrientation;
(function (ButtonImageOrientation) {
    ButtonImageOrientation["Horizontal"] = "Horizontal";
    ButtonImageOrientation["Vertical"] = "Vertical";
    ButtonImageOrientation["Square"] = "Square";
})(ButtonImageOrientation = exports.ButtonImageOrientation || (exports.ButtonImageOrientation = {}));
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
var ContentBoxWidth;
(function (ContentBoxWidth) {
    ContentBoxWidth["None"] = "none";
    ContentBoxWidth["Third"] = "third";
    ContentBoxWidth["Half"] = "half";
    ContentBoxWidth["Full"] = "full";
})(ContentBoxWidth = exports.ContentBoxWidth || (exports.ContentBoxWidth = {}));
