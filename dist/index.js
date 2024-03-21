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
exports.ContentBoxWidth = exports.InputType = exports.ButtonImageOrientation = exports.ButtonType = exports.ValueType = exports.ParameterRole = exports.ClientTier = exports.FieldOption = exports.FileUploadDto = exports.TierKeyDto = exports.ButtonDto = exports.LayoutDto = exports.ControlParameterDto = exports.ParameterDto = exports.AvatarDto = exports.ClientDto = exports.ButtonStyleDto = exports.BackgroundDto = exports.TierDto = exports.theme = exports.AvatarsPageDto = exports.ProfilePageDto = exports.IgnoredParams = exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = exports.LoginSchema = exports.CmapApiErrorDTO = exports.CmapApiError = void 0;
var dtos_1 = require("./dtos");
Object.defineProperty(exports, "AvatarsPageDto", { enumerable: true, get: function () { return dtos_1.AvatarsPageDto; } });
Object.defineProperty(exports, "ProfilePageDto", { enumerable: true, get: function () { return dtos_1.ProfilePageDto; } });
var const_1 = require("./const");
Object.defineProperty(exports, "IgnoredParams", { enumerable: true, get: function () { return const_1.IgnoredParams; } });
var theme_1 = require("./react/theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
var login_1 = require("./types/api/login");
Object.defineProperty(exports, "LoginSchema", { enumerable: true, get: function () { return login_1.LoginSchema; } });
var register_1 = require("./types/api/register");
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterSchema", { enumerable: true, get: function () { return register_1.RegisterSchema; } });
Object.defineProperty(exports, "RegisterKeySchema", { enumerable: true, get: function () { return register_1.RegisterKeySchema; } });
var api_1 = require("./types/api");
Object.defineProperty(exports, "CmapApiError", { enumerable: true, get: function () { return api_1.CmapApiError; } });
Object.defineProperty(exports, "CmapApiErrorDTO", { enumerable: true, get: function () { return api_1.CmapApiErrorDTO; } });
// -- Classes -- //
var BaseDto = /** @class */ (function () {
    function BaseDto() {
        this.createDate = new Date();
        this.updateDate = new Date();
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
        this.tier = ClientTier.Basic;
        this.rank = 0;
        this.color = '';
        this.avatars = 0;
        this.layouts = 0;
        this.buttons = 0;
        this.controlParameters = 0;
        this.useCost = false;
        this.hp = false;
    }
    return TierDto;
}());
exports.TierDto = TierDto;
var BackgroundDto = /** @class */ (function () {
    function BackgroundDto() {
        this.className = '';
        this.Label = '';
        this.tier = new TierDto();
    }
    return BackgroundDto;
}());
exports.BackgroundDto = BackgroundDto;
var ButtonStyleDto = /** @class */ (function () {
    function ButtonStyleDto() {
        this.className = '';
        this.Label = '';
        this.tier = new TierDto();
    }
    return ButtonStyleDto;
}());
exports.ButtonStyleDto = ButtonStyleDto;
var ClientDto = /** @class */ (function (_super) {
    __extends(ClientDto, _super);
    function ClientDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.username = '';
        _this.displayName = '';
        _this.bio = '';
        _this.image = null;
        _this.hidden = false;
        _this.tier = new TierDto();
        _this.background = new BackgroundDto();
        _this.buttonStyle = new ButtonStyleDto();
        return _this;
    }
    return ClientDto;
}(BaseDto));
exports.ClientDto = ClientDto;
var AvatarDto = /** @class */ (function (_super) {
    __extends(AvatarDto, _super);
    function AvatarDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vrcId = '';
        _this.label = '';
        _this.default = false;
        return _this;
    }
    return AvatarDto;
}(BaseParentDto));
exports.AvatarDto = AvatarDto;
var ParameterDto = /** @class */ (function (_super) {
    __extends(ParameterDto, _super);
    function ParameterDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.path = '';
        _this.valueType = ValueType.Int;
        return _this;
    }
    return ParameterDto;
}(BaseParentDto));
exports.ParameterDto = ParameterDto;
var ControlParameterDto = /** @class */ (function (_super) {
    __extends(ControlParameterDto, _super);
    function ControlParameterDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.role = ParameterRole.Callback;
        _this.path = '';
        _this.valuePrimary = '';
        _this.valueSecondary = '';
        _this.valueType = ValueType.Int;
        return _this;
    }
    return ControlParameterDto;
}(BaseParentDto));
exports.ControlParameterDto = ControlParameterDto;
var LayoutDto = /** @class */ (function (_super) {
    __extends(LayoutDto, _super);
    function LayoutDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.order = 0;
        _this.width = ContentBoxWidth.None;
        return _this;
    }
    return LayoutDto;
}(BaseParentDto));
exports.LayoutDto = LayoutDto;
var ButtonDto = /** @class */ (function (_super) {
    __extends(ButtonDto, _super);
    function ButtonDto() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = '';
        _this.path = '';
        _this.value = '';
        _this.valueAlt = '';
        _this.valueType = ValueType.Int;
        _this.buttonType = ButtonType.Button;
        _this.image = null;
        _this.imageOrientation = ButtonImageOrientation.Square;
        _this.order = 0;
        _this.useCost = null;
        _this.controlParameter = null;
        return _this;
    }
    return ButtonDto;
}(BaseParentDto));
exports.ButtonDto = ButtonDto;
var TierKeyDto = /** @class */ (function () {
    function TierKeyDto() {
        this.key = '';
        this.tier = ClientTier.Basic;
        this.used = false;
    }
    return TierKeyDto;
}());
exports.TierKeyDto = TierKeyDto;
var FileUploadDto = /** @class */ (function () {
    function FileUploadDto() {
        this.parentType = '';
        this.parentId = '';
        this.file = null;
    }
    return FileUploadDto;
}());
exports.FileUploadDto = FileUploadDto;
var FieldOption = /** @class */ (function () {
    function FieldOption() {
        this.key = '';
        this.value = '';
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
    ParameterRole["UseCost"] = "Use cost";
    ParameterRole["HP"] = "HP";
    ParameterRole["Callback"] = "Callback";
})(ParameterRole = exports.ParameterRole || (exports.ParameterRole = {}));
var ValueType;
(function (ValueType) {
    ValueType["Int"] = "Int";
    ValueType["Float"] = "Float";
    ValueType["Bool"] = "Bool";
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
