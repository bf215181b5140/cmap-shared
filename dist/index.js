"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBoxWidth = exports.InputType = exports.ButtonImageOrientation = exports.ButtonType = exports.ValueType = exports.ParameterRole = exports.ClientTier = exports.theme = exports.IgnoredParams = exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = exports.LoginSchema = exports.LoginFormSchema = exports.CmapApiErrorDTO = exports.CmapApiError = void 0;
var const_1 = require("./const");
Object.defineProperty(exports, "IgnoredParams", { enumerable: true, get: function () { return const_1.IgnoredParams; } });
var theme_1 = require("./react/theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
var login_1 = require("./types/api/login");
Object.defineProperty(exports, "LoginFormSchema", { enumerable: true, get: function () { return login_1.LoginFormSchema; } });
Object.defineProperty(exports, "LoginSchema", { enumerable: true, get: function () { return login_1.LoginSchema; } });
var register_1 = require("./types/api/register");
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterSchema", { enumerable: true, get: function () { return register_1.RegisterSchema; } });
Object.defineProperty(exports, "RegisterKeySchema", { enumerable: true, get: function () { return register_1.RegisterKeySchema; } });
var api_1 = require("./types/api");
Object.defineProperty(exports, "CmapApiError", { enumerable: true, get: function () { return api_1.CmapApiError; } });
Object.defineProperty(exports, "CmapApiErrorDTO", { enumerable: true, get: function () { return api_1.CmapApiErrorDTO; } });
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
