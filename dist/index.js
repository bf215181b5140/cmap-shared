"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parameterValueOrAvatarSimpleSchema = exports.parameterValueSimpleSchema = exports.parameterValueOrAvatarFormSchema = exports.parameterValueOrAvatarSchema = exports.parameterValueFormSchema = exports.parameterValueSchema = exports.parameterValueNumberSchema = exports.parameterValueStringSchema = exports.parameterValueAvatarIdSchema = exports.parameterPathSchema = exports.VrcParameterSchema = exports.BaseButtonSchema = exports.BaseGroupSchema = exports.PresetParameterFormSchema = exports.PresetParameterSchema = exports.UsedAvatarButtonSchema = exports.UseAvatarButtonSchema = exports.UsedPresetButtonSchema = exports.UsePresetButtonSchema = exports.UsedParameterButtonSchema = exports.UseParameterButtonSchema = exports.ParameterSchema = exports.VisibilityParameterFormSchema = exports.VisibilityParameterSchema = exports.CallbackParameterFormSchema = exports.CallbackParameterSchema = exports.KeyValueSchema = exports.UploadedFileSchema = exports.UpdateSchema = exports.InteractionKeySchema = exports.AvatarButtonSchema = exports.AvatarGroupSchema = exports.PresetButtonSchema = exports.PresetGroupSchema = exports.ParameterButtonSchema = exports.ParameterGroupSchema = exports.ParameterBadgeSchema = exports.LayoutSchema = exports.InviteKeySchema = exports.BackgroundSchema = exports.ThemeSchema = exports.TierSchema = exports.ClientSchema = exports.VisibilityParameterConditionSchema = exports.ParameterBadgeTypeSchema = exports.NotificationTypeSchema = exports.ImageOrientationSchema = exports.GroupWidthSchema = exports.ClientVisibilitySchema = exports.ParameterButtonTypeSchema = void 0;
exports.URL = exports.URL_LIVE = exports.imageOrientationToAspectRatio = exports.imageUrlPathToUrl = exports.trimNumberDecimals = exports.convertParameterValueFromString = exports.interactionKeySchema = exports.OrderSchema = exports.usernameSchema = exports.passwordSchema = exports.IdSchema = exports.BaseNullableIdSchema = exports.BaseIdSchema = exports.BaseFormSchema = exports.GeneratedInviteKeySchema = exports.UseInviteKeyFormSchema = exports.TiersPageSchema = exports.StylePageSchema = exports.InteractionKeysFormSchema = exports.AvatarButtonCopySchema = exports.AvatarButtonFormSchema = exports.AvatarGroupCopySchema = exports.AvatarGroupFormSchema = exports.PresetButtonCopySchema = exports.PresetButtonFormSchema = exports.PresetGroupCopySchema = exports.PresetGroupFormSchema = exports.ParameterButtonCopySchema = exports.ParameterButtonFormSchema = exports.ParameterGroupCopySchema = exports.ParameterGroupFormSchema = exports.ParameterBadgeFormSchema = exports.LayoutCopySchema = exports.LayoutFormSchema = exports.ProfilePageSchema = exports.ProfileFormSchema = exports.AccountPageSchema = exports.RegisterWithKeyFormSchema = exports.RegisterFormSchema = exports.RegisterInfoSchema = exports.LoginFormSchema = exports.LoginTokenSchema = exports.ApiResponseSchema = void 0;
// ------------------------------ Enums ------------------------------ //
var parameterButtonType_1 = require("./enums/parameterButtonType");
Object.defineProperty(exports, "ParameterButtonTypeSchema", { enumerable: true, get: function () { return parameterButtonType_1.ParameterButtonTypeSchema; } });
var clientVisibility_1 = require("./enums/clientVisibility");
Object.defineProperty(exports, "ClientVisibilitySchema", { enumerable: true, get: function () { return clientVisibility_1.ClientVisibilitySchema; } });
var groupWidth_1 = require("./enums/groupWidth");
Object.defineProperty(exports, "GroupWidthSchema", { enumerable: true, get: function () { return groupWidth_1.GroupWidthSchema; } });
var imageOrientation_1 = require("./enums/imageOrientation");
Object.defineProperty(exports, "ImageOrientationSchema", { enumerable: true, get: function () { return imageOrientation_1.ImageOrientationSchema; } });
var notificationType_1 = require("./enums/notificationType");
Object.defineProperty(exports, "NotificationTypeSchema", { enumerable: true, get: function () { return notificationType_1.NotificationTypeSchema; } });
var parameterBadgeType_1 = require("./enums/parameterBadgeType");
Object.defineProperty(exports, "ParameterBadgeTypeSchema", { enumerable: true, get: function () { return parameterBadgeType_1.ParameterBadgeTypeSchema; } });
var visibilityParameterCondition_1 = require("./enums/visibilityParameterCondition");
Object.defineProperty(exports, "VisibilityParameterConditionSchema", { enumerable: true, get: function () { return visibilityParameterCondition_1.VisibilityParameterConditionSchema; } });
// ------------------------------ Objects ------------------------------ //
var client_1 = require("./objects/client");
Object.defineProperty(exports, "ClientSchema", { enumerable: true, get: function () { return client_1.ClientSchema; } });
var tier_1 = require("./objects/tier");
Object.defineProperty(exports, "TierSchema", { enumerable: true, get: function () { return tier_1.TierSchema; } });
var theme_1 = require("./objects/theme");
Object.defineProperty(exports, "ThemeSchema", { enumerable: true, get: function () { return theme_1.ThemeSchema; } });
var background_1 = require("./objects/background");
Object.defineProperty(exports, "BackgroundSchema", { enumerable: true, get: function () { return background_1.BackgroundSchema; } });
var inviteKey_1 = require("./objects/inviteKey");
Object.defineProperty(exports, "InviteKeySchema", { enumerable: true, get: function () { return inviteKey_1.InviteKeySchema; } });
var layout_1 = require("./objects/layout");
Object.defineProperty(exports, "LayoutSchema", { enumerable: true, get: function () { return layout_1.LayoutSchema; } });
var parameterBadge_1 = require("./objects/parameterBadge");
Object.defineProperty(exports, "ParameterBadgeSchema", { enumerable: true, get: function () { return parameterBadge_1.ParameterBadgeSchema; } });
var parameterGroup_1 = require("./objects/parameterGroup");
Object.defineProperty(exports, "ParameterGroupSchema", { enumerable: true, get: function () { return parameterGroup_1.ParameterGroupSchema; } });
var parameterButton_1 = require("./objects/parameterButton");
Object.defineProperty(exports, "ParameterButtonSchema", { enumerable: true, get: function () { return parameterButton_1.ParameterButtonSchema; } });
var presetGroup_1 = require("./objects/presetGroup");
Object.defineProperty(exports, "PresetGroupSchema", { enumerable: true, get: function () { return presetGroup_1.PresetGroupSchema; } });
var presetButton_1 = require("./objects/presetButton");
Object.defineProperty(exports, "PresetButtonSchema", { enumerable: true, get: function () { return presetButton_1.PresetButtonSchema; } });
var avatarGroup_1 = require("./objects/avatarGroup");
Object.defineProperty(exports, "AvatarGroupSchema", { enumerable: true, get: function () { return avatarGroup_1.AvatarGroupSchema; } });
var avatarButton_1 = require("./objects/avatarButton");
Object.defineProperty(exports, "AvatarButtonSchema", { enumerable: true, get: function () { return avatarButton_1.AvatarButtonSchema; } });
var interactionKey_1 = require("./objects/interactionKey");
Object.defineProperty(exports, "InteractionKeySchema", { enumerable: true, get: function () { return interactionKey_1.InteractionKeySchema; } });
var update_1 = require("./objects/update");
Object.defineProperty(exports, "UpdateSchema", { enumerable: true, get: function () { return update_1.UpdateSchema; } });
var uploadedFile_1 = require("./objects/uploadedFile");
Object.defineProperty(exports, "UploadedFileSchema", { enumerable: true, get: function () { return uploadedFile_1.UploadedFileSchema; } });
var keyValue_1 = require("./objects/keyValue");
Object.defineProperty(exports, "KeyValueSchema", { enumerable: true, get: function () { return keyValue_1.KeyValueSchema; } });
var callbackParameter_1 = require("./objects/callbackParameter");
Object.defineProperty(exports, "CallbackParameterSchema", { enumerable: true, get: function () { return callbackParameter_1.CallbackParameterSchema; } });
Object.defineProperty(exports, "CallbackParameterFormSchema", { enumerable: true, get: function () { return callbackParameter_1.CallbackParameterFormSchema; } });
var visibilityParameter_1 = require("./objects/visibilityParameter");
Object.defineProperty(exports, "VisibilityParameterSchema", { enumerable: true, get: function () { return visibilityParameter_1.VisibilityParameterSchema; } });
Object.defineProperty(exports, "VisibilityParameterFormSchema", { enumerable: true, get: function () { return visibilityParameter_1.VisibilityParameterFormSchema; } });
var parameter_1 = require("./objects/parameter");
Object.defineProperty(exports, "ParameterSchema", { enumerable: true, get: function () { return parameter_1.ParameterSchema; } });
var useParameterButton_1 = require("./objects/useParameterButton");
Object.defineProperty(exports, "UseParameterButtonSchema", { enumerable: true, get: function () { return useParameterButton_1.UseParameterButtonSchema; } });
var usedParameterButton_1 = require("./objects/usedParameterButton");
Object.defineProperty(exports, "UsedParameterButtonSchema", { enumerable: true, get: function () { return usedParameterButton_1.UsedParameterButtonSchema; } });
var usePresetButton_1 = require("./objects/usePresetButton");
Object.defineProperty(exports, "UsePresetButtonSchema", { enumerable: true, get: function () { return usePresetButton_1.UsePresetButtonSchema; } });
var usedPresetButton_1 = require("./objects/usedPresetButton");
Object.defineProperty(exports, "UsedPresetButtonSchema", { enumerable: true, get: function () { return usedPresetButton_1.UsedPresetButtonSchema; } });
var useAvatarButton_1 = require("./objects/useAvatarButton");
Object.defineProperty(exports, "UseAvatarButtonSchema", { enumerable: true, get: function () { return useAvatarButton_1.UseAvatarButtonSchema; } });
var usedAvatarButton_1 = require("./objects/usedAvatarButton");
Object.defineProperty(exports, "UsedAvatarButtonSchema", { enumerable: true, get: function () { return usedAvatarButton_1.UsedAvatarButtonSchema; } });
var presetParameter_1 = require("./objects/presetParameter");
Object.defineProperty(exports, "PresetParameterSchema", { enumerable: true, get: function () { return presetParameter_1.PresetParameterSchema; } });
Object.defineProperty(exports, "PresetParameterFormSchema", { enumerable: true, get: function () { return presetParameter_1.PresetParameterFormSchema; } });
var baseGroup_1 = require("./objects/baseGroup");
Object.defineProperty(exports, "BaseGroupSchema", { enumerable: true, get: function () { return baseGroup_1.BaseGroupSchema; } });
var baseButton_1 = require("./objects/baseButton");
Object.defineProperty(exports, "BaseButtonSchema", { enumerable: true, get: function () { return baseButton_1.BaseButtonSchema; } });
var vrcParameter_1 = require("./objects/vrcParameter");
Object.defineProperty(exports, "VrcParameterSchema", { enumerable: true, get: function () { return vrcParameter_1.VrcParameterSchema; } });
// ------------------------------ Primitives ------------------------------ //
var parameter_2 = require("./primitives/parameter");
Object.defineProperty(exports, "parameterPathSchema", { enumerable: true, get: function () { return parameter_2.parameterPathSchema; } });
Object.defineProperty(exports, "parameterValueAvatarIdSchema", { enumerable: true, get: function () { return parameter_2.parameterValueAvatarIdSchema; } });
Object.defineProperty(exports, "parameterValueStringSchema", { enumerable: true, get: function () { return parameter_2.parameterValueStringSchema; } });
Object.defineProperty(exports, "parameterValueNumberSchema", { enumerable: true, get: function () { return parameter_2.parameterValueNumberSchema; } });
Object.defineProperty(exports, "parameterValueSchema", { enumerable: true, get: function () { return parameter_2.parameterValueSchema; } });
Object.defineProperty(exports, "parameterValueFormSchema", { enumerable: true, get: function () { return parameter_2.parameterValueFormSchema; } });
Object.defineProperty(exports, "parameterValueOrAvatarSchema", { enumerable: true, get: function () { return parameter_2.parameterValueOrAvatarSchema; } });
Object.defineProperty(exports, "parameterValueOrAvatarFormSchema", { enumerable: true, get: function () { return parameter_2.parameterValueOrAvatarFormSchema; } });
Object.defineProperty(exports, "parameterValueSimpleSchema", { enumerable: true, get: function () { return parameter_2.parameterValueSimpleSchema; } });
Object.defineProperty(exports, "parameterValueOrAvatarSimpleSchema", { enumerable: true, get: function () { return parameter_2.parameterValueOrAvatarSimpleSchema; } });
// ------------------------------ API ------------------------------ //
var api_1 = require("./api");
Object.defineProperty(exports, "ApiResponseSchema", { enumerable: true, get: function () { return api_1.ApiResponseSchema; } });
var login_1 = require("./api/login/login");
Object.defineProperty(exports, "LoginTokenSchema", { enumerable: true, get: function () { return login_1.LoginTokenSchema; } });
Object.defineProperty(exports, "LoginFormSchema", { enumerable: true, get: function () { return login_1.LoginFormSchema; } });
var register_1 = require("./api/register/register");
Object.defineProperty(exports, "RegisterInfoSchema", { enumerable: true, get: function () { return register_1.RegisterInfoSchema; } });
Object.defineProperty(exports, "RegisterFormSchema", { enumerable: true, get: function () { return register_1.RegisterFormSchema; } });
Object.defineProperty(exports, "RegisterWithKeyFormSchema", { enumerable: true, get: function () { return register_1.RegisterWithKeyFormSchema; } });
var account_1 = require("./api/account/account");
Object.defineProperty(exports, "AccountPageSchema", { enumerable: true, get: function () { return account_1.AccountPageSchema; } });
Object.defineProperty(exports, "ProfileFormSchema", { enumerable: true, get: function () { return account_1.ProfileFormSchema; } });
var profile_1 = require("./api/profile/profile");
Object.defineProperty(exports, "ProfilePageSchema", { enumerable: true, get: function () { return profile_1.ProfilePageSchema; } });
var layout_2 = require("./api/profile/layout/layout");
Object.defineProperty(exports, "LayoutFormSchema", { enumerable: true, get: function () { return layout_2.LayoutFormSchema; } });
Object.defineProperty(exports, "LayoutCopySchema", { enumerable: true, get: function () { return layout_2.LayoutCopySchema; } });
var parameterBadges_1 = require("./api/profile/layout/parameterBadges/parameterBadges");
Object.defineProperty(exports, "ParameterBadgeFormSchema", { enumerable: true, get: function () { return parameterBadges_1.ParameterBadgeFormSchema; } });
var parameterGroup_2 = require("./api/profile/parameters/parameterGroup");
Object.defineProperty(exports, "ParameterGroupFormSchema", { enumerable: true, get: function () { return parameterGroup_2.ParameterGroupFormSchema; } });
Object.defineProperty(exports, "ParameterGroupCopySchema", { enumerable: true, get: function () { return parameterGroup_2.ParameterGroupCopySchema; } });
var parameterButton_2 = require("./api/profile/parameters/parameterButton");
Object.defineProperty(exports, "ParameterButtonFormSchema", { enumerable: true, get: function () { return parameterButton_2.ParameterButtonFormSchema; } });
Object.defineProperty(exports, "ParameterButtonCopySchema", { enumerable: true, get: function () { return parameterButton_2.ParameterButtonCopySchema; } });
var presetGroup_2 = require("./api/profile/presets/presetGroup");
Object.defineProperty(exports, "PresetGroupFormSchema", { enumerable: true, get: function () { return presetGroup_2.PresetGroupFormSchema; } });
Object.defineProperty(exports, "PresetGroupCopySchema", { enumerable: true, get: function () { return presetGroup_2.PresetGroupCopySchema; } });
var presetButton_2 = require("./api/profile/presets/presetButton");
Object.defineProperty(exports, "PresetButtonFormSchema", { enumerable: true, get: function () { return presetButton_2.PresetButtonFormSchema; } });
Object.defineProperty(exports, "PresetButtonCopySchema", { enumerable: true, get: function () { return presetButton_2.PresetButtonCopySchema; } });
var avatarGroup_2 = require("./api/profile/avatars/avatarGroup");
Object.defineProperty(exports, "AvatarGroupFormSchema", { enumerable: true, get: function () { return avatarGroup_2.AvatarGroupFormSchema; } });
Object.defineProperty(exports, "AvatarGroupCopySchema", { enumerable: true, get: function () { return avatarGroup_2.AvatarGroupCopySchema; } });
var avatarButton_2 = require("./api/profile/avatars/avatarButton");
Object.defineProperty(exports, "AvatarButtonFormSchema", { enumerable: true, get: function () { return avatarButton_2.AvatarButtonFormSchema; } });
Object.defineProperty(exports, "AvatarButtonCopySchema", { enumerable: true, get: function () { return avatarButton_2.AvatarButtonCopySchema; } });
var interactionKeys_1 = require("./api/profile/interactionKeys/interactionKeys");
Object.defineProperty(exports, "InteractionKeysFormSchema", { enumerable: true, get: function () { return interactionKeys_1.InteractionKeysFormSchema; } });
var style_1 = require("./api/style/style");
Object.defineProperty(exports, "StylePageSchema", { enumerable: true, get: function () { return style_1.StylePageSchema; } });
var tiers_1 = require("./api/tiers/tiers");
Object.defineProperty(exports, "TiersPageSchema", { enumerable: true, get: function () { return tiers_1.TiersPageSchema; } });
Object.defineProperty(exports, "UseInviteKeyFormSchema", { enumerable: true, get: function () { return tiers_1.UseInviteKeyFormSchema; } });
Object.defineProperty(exports, "GeneratedInviteKeySchema", { enumerable: true, get: function () { return tiers_1.GeneratedInviteKeySchema; } });
// ------------------------------ Shared ------------------------------ //
var shared_1 = require("./shared");
Object.defineProperty(exports, "BaseFormSchema", { enumerable: true, get: function () { return shared_1.BaseFormSchema; } });
Object.defineProperty(exports, "BaseIdSchema", { enumerable: true, get: function () { return shared_1.BaseIdSchema; } });
Object.defineProperty(exports, "BaseNullableIdSchema", { enumerable: true, get: function () { return shared_1.BaseNullableIdSchema; } });
Object.defineProperty(exports, "IdSchema", { enumerable: true, get: function () { return shared_1.IdSchema; } });
Object.defineProperty(exports, "passwordSchema", { enumerable: true, get: function () { return shared_1.passwordSchema; } });
Object.defineProperty(exports, "usernameSchema", { enumerable: true, get: function () { return shared_1.usernameSchema; } });
Object.defineProperty(exports, "OrderSchema", { enumerable: true, get: function () { return shared_1.OrderSchema; } });
Object.defineProperty(exports, "interactionKeySchema", { enumerable: true, get: function () { return shared_1.interactionKeySchema; } });
// ------------------------------ Other ------------------------------ //
var util_1 = require("./util");
Object.defineProperty(exports, "convertParameterValueFromString", { enumerable: true, get: function () { return util_1.convertParameterValueFromString; } });
Object.defineProperty(exports, "trimNumberDecimals", { enumerable: true, get: function () { return util_1.trimNumberDecimals; } });
Object.defineProperty(exports, "imageUrlPathToUrl", { enumerable: true, get: function () { return util_1.imageUrlPathToUrl; } });
Object.defineProperty(exports, "imageOrientationToAspectRatio", { enumerable: true, get: function () { return util_1.imageOrientationToAspectRatio; } });
// ------------------------------ Const ------------------------------ //
exports.URL_LIVE = 'https://changemyavatarparams.com';
exports.URL = process.env.NODE_ENV === 'production' ? exports.URL_LIVE : 'http://localhost:8080';
