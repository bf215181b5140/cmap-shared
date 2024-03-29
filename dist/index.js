"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBoxWidth = exports.FieldOption = exports.theme = exports.IgnoredParams = exports.ParameterValueType = exports.BaseParentIdSchema = exports.RequiredIdSchema = exports.BaseIdSchema = exports.CmapApiErrorDTO = exports.CmapApiError = exports.ButtonImageOrientation = exports.ButtonType = exports.ButtonFormSchema = exports.LayoutWidth = exports.LayoutFormSchema = exports.ControlParameterRole = exports.ControlParametersFormSchema = exports.AvatarFormSchema = exports.TierType = exports.ProfileFormSchema = exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = exports.LoginSchema = void 0;
var const_1 = require("./const");
Object.defineProperty(exports, "IgnoredParams", { enumerable: true, get: function () { return const_1.IgnoredParams; } });
var theme_1 = require("./react/theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
// Login
var login_1 = require("./types/login");
Object.defineProperty(exports, "LoginSchema", { enumerable: true, get: function () { return login_1.LoginSchema; } });
// Register
var register_1 = require("./types/register");
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterSchema", { enumerable: true, get: function () { return register_1.RegisterSchema; } });
Object.defineProperty(exports, "RegisterKeySchema", { enumerable: true, get: function () { return register_1.RegisterKeySchema; } });
// Profile
var profile_1 = require("./types/profile");
Object.defineProperty(exports, "ProfileFormSchema", { enumerable: true, get: function () { return profile_1.ProfileFormSchema; } });
// Tiers
var tier_1 = require("./types/tier");
Object.defineProperty(exports, "TierType", { enumerable: true, get: function () { return tier_1.TierType; } });
// Avatar
var avatar_1 = require("./types/avatar");
Object.defineProperty(exports, "AvatarFormSchema", { enumerable: true, get: function () { return avatar_1.AvatarFormSchema; } });
// Control parameters
var controlParameters_1 = require("./types/controlParameters");
Object.defineProperty(exports, "ControlParametersFormSchema", { enumerable: true, get: function () { return controlParameters_1.ControlParametersFormSchema; } });
Object.defineProperty(exports, "ControlParameterRole", { enumerable: true, get: function () { return controlParameters_1.ControlParameterRole; } });
// Layout
var layout_1 = require("./types/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_1.LayoutFormSchema; } });
Object.defineProperty(exports, "LayoutWidth", { enumerable: true, get: function () { return layout_1.LayoutWidth; } });
// Button
var button_1 = require("./types/button");
Object.defineProperty(exports, "ButtonFormSchema", { enumerable: true, get: function () { return button_1.ButtonFormSchema; } });
Object.defineProperty(exports, "ButtonType", { enumerable: true, get: function () { return button_1.ButtonType; } });
Object.defineProperty(exports, "ButtonImageOrientation", { enumerable: true, get: function () { return button_1.ButtonImageOrientation; } });
// Shared
var shared_1 = require("./types/shared");
Object.defineProperty(exports, "CmapApiError", { enumerable: true, get: function () { return shared_1.CmapApiError; } });
Object.defineProperty(exports, "CmapApiErrorDTO", { enumerable: true, get: function () { return shared_1.CmapApiErrorDTO; } });
Object.defineProperty(exports, "BaseIdSchema", { enumerable: true, get: function () { return shared_1.BaseIdSchema; } });
Object.defineProperty(exports, "RequiredIdSchema", { enumerable: true, get: function () { return shared_1.RequiredIdSchema; } });
Object.defineProperty(exports, "BaseParentIdSchema", { enumerable: true, get: function () { return shared_1.BaseParentIdSchema; } });
Object.defineProperty(exports, "ParameterValueType", { enumerable: true, get: function () { return shared_1.ParameterValueType; } });
var FieldOption = /** @class */ (function () {
    function FieldOption() {
        this.key = '';
        this.value = '';
    }
    return FieldOption;
}());
exports.FieldOption = FieldOption;
var ContentBoxWidth;
(function (ContentBoxWidth) {
    ContentBoxWidth["None"] = "none";
    ContentBoxWidth["Third"] = "third";
    ContentBoxWidth["Half"] = "half";
    ContentBoxWidth["Full"] = "full";
})(ContentBoxWidth = exports.ContentBoxWidth || (exports.ContentBoxWidth = {}));
