"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentBoxWidth = exports.FieldOption = exports.theme = exports.IgnoredParams = exports.ParameterValueType = exports.BaseParentIdSchema = exports.RequiredIdSchema = exports.BaseIdSchema = exports.CmapApiErrorDTO = exports.CmapApiError = exports.ClientStateParamSchema = exports.ClientStateParamsSchema = exports.OrderListSchema = exports.OrderSchema = exports.UpdatesFormSchema = exports.UpdateSchema = exports.ButtonImageOrientation = exports.ButtonType = exports.ButtonFormSchema = exports.LayoutWidth = exports.LayoutFormSchema = exports.StateBadgesSchema = exports.StateBadgeSchema = exports.StateBadgeKey = exports.ControlParameterRole = exports.ControlParametersFormSchema = exports.AvatarFormSchema = exports.TierType = exports.ProfileFormSchema = exports.RegisterKeySchema = exports.RegisterSchema = exports.RegisterFormSchema = exports.LoginSchema = void 0;
const const_1 = require("./const");
Object.defineProperty(exports, "IgnoredParams", { enumerable: true, get: function () { return const_1.IgnoredParams; } });
const theme_1 = require("./react/theme");
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
// State badges
var stateBadge_1 = require("./types/stateBadge");
Object.defineProperty(exports, "StateBadgeKey", { enumerable: true, get: function () { return stateBadge_1.StateBadgeKey; } });
Object.defineProperty(exports, "StateBadgeSchema", { enumerable: true, get: function () { return stateBadge_1.StateBadgeSchema; } });
Object.defineProperty(exports, "StateBadgesSchema", { enumerable: true, get: function () { return stateBadge_1.StateBadgesSchema; } });
// Layout
var layout_1 = require("./types/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_1.LayoutFormSchema; } });
Object.defineProperty(exports, "LayoutWidth", { enumerable: true, get: function () { return layout_1.LayoutWidth; } });
// Button
var button_1 = require("./types/button");
Object.defineProperty(exports, "ButtonFormSchema", { enumerable: true, get: function () { return button_1.ButtonFormSchema; } });
Object.defineProperty(exports, "ButtonType", { enumerable: true, get: function () { return button_1.ButtonType; } });
Object.defineProperty(exports, "ButtonImageOrientation", { enumerable: true, get: function () { return button_1.ButtonImageOrientation; } });
// Update
var update_1 = require("./types/update");
Object.defineProperty(exports, "UpdateSchema", { enumerable: true, get: function () { return update_1.UpdateSchema; } });
Object.defineProperty(exports, "UpdatesFormSchema", { enumerable: true, get: function () { return update_1.UpdatesFormSchema; } });
// Order
var order_1 = require("./types/order");
Object.defineProperty(exports, "OrderSchema", { enumerable: true, get: function () { return order_1.OrderSchema; } });
Object.defineProperty(exports, "OrderListSchema", { enumerable: true, get: function () { return order_1.OrderListSchema; } });
// Client state
var clientState_1 = require("./types/clientState");
Object.defineProperty(exports, "ClientStateParamsSchema", { enumerable: true, get: function () { return clientState_1.ClientStateParamsSchema; } });
Object.defineProperty(exports, "ClientStateParamSchema", { enumerable: true, get: function () { return clientState_1.ClientStateParamSchema; } });
// Shared
var shared_1 = require("./types/shared");
Object.defineProperty(exports, "CmapApiError", { enumerable: true, get: function () { return shared_1.CmapApiError; } });
Object.defineProperty(exports, "CmapApiErrorDTO", { enumerable: true, get: function () { return shared_1.CmapApiErrorDTO; } });
Object.defineProperty(exports, "BaseIdSchema", { enumerable: true, get: function () { return shared_1.BaseIdSchema; } });
Object.defineProperty(exports, "RequiredIdSchema", { enumerable: true, get: function () { return shared_1.RequiredIdSchema; } });
Object.defineProperty(exports, "BaseParentIdSchema", { enumerable: true, get: function () { return shared_1.BaseParentIdSchema; } });
Object.defineProperty(exports, "ParameterValueType", { enumerable: true, get: function () { return shared_1.ParameterValueType; } });
class FieldOption {
    key = '';
    value = '';
}
exports.FieldOption = FieldOption;
var ContentBoxWidth;
(function (ContentBoxWidth) {
    ContentBoxWidth["None"] = "none";
    ContentBoxWidth["Third"] = "third";
    ContentBoxWidth["Half"] = "half";
    ContentBoxWidth["Full"] = "full";
})(ContentBoxWidth = exports.ContentBoxWidth || (exports.ContentBoxWidth = {}));
