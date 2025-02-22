// ------------------------------ Enums ------------------------------ //
export { ParameterButtonTypeSchema, ParameterButtonType } from './enums/parameterButtonType';
export { ClientVisibilitySchema, ClientVisibility } from './enums/clientVisibility';
export { GroupWidthSchema, GroupWidth } from './enums/groupWidth';
export { ImageOrientationSchema, ImageOrientation } from './enums/imageOrientation';
export { NotificationTypeSchema, NotificationType } from './enums/notificationType';
export { ParameterBadgeTypeSchema, ParameterBadgeType } from './enums/parameterBadgeType';
export { VisibilityParameterConditionSchema, VisibilityParameterCondition } from './enums/visibilityParameterCondition';
// ------------------------------ Objects ------------------------------ //
export { ClientDTO, ClientSchema } from './objects/client';
export { TierDTO, TierSchema } from './objects/tier';
export { ThemeDTO, ThemeSchema } from './objects/theme';
export { BackgroundDTO, BackgroundSchema } from './objects/background';
export { InviteKeyDTO, InviteKeySchema } from './objects/inviteKey';
export { LayoutDTO, LayoutSchema } from './objects/layout';
export { ParameterBadgeDTO, ParameterBadgeSchema } from './objects/parameterBadge';
export { ParameterGroupDTO, ParameterGroupSchema } from './objects/parameterGroup';
export { ParameterButtonDTO, ParameterButtonSchema } from './objects/parameterButton';
export { PresetGroupSchema, PresetGroupDTO } from './objects/presetGroup';
export { PresetButtonSchema, PresetButtonDTO } from './objects/presetButton';
export { AvatarGroupSchema, AvatarGroupDTO } from './objects/avatarGroup';
export { AvatarButtonSchema, AvatarButtonDTO } from './objects/avatarButton';
export { InteractionKeyDTO, InteractionKeySchema } from './objects/interactionKey';
export { UpdateDTO, UpdateSchema } from './objects/update';
export { UploadedFileDTO, UploadedFileSchema } from './objects/uploadedFile';
export { KeyValueSchema, KeyValueDTO } from './objects/keyValue';
export { CallbackParameterSchema, CallbackParameterDTO, CallbackParameterFormSchema, CallbackParameterFormDTO } from './objects/callbackParameter';
export { VisibilityParameterSchema, VisibilityParameterDTO, VisibilityParameterFormSchema, VisibilityParameterFormDTO } from './objects/visibilityParameter';
export { ParameterSchema, ParameterDTO } from './objects/parameter';
export { UseParameterButtonSchema, UseParameterButtonDTO } from './objects/useParameterButton';
export { UsedParameterButtonSchema, UsedParameterButtonDTO } from './objects/usedParameterButton';
export { UsePresetButtonSchema, UsePresetButtonDTO } from './objects/usePresetButton';
export { UsedPresetButtonSchema, UsedPresetButtonDTO } from './objects/usedPresetButton';
export { UseAvatarButtonSchema, UseAvatarButtonDTO } from './objects/useAvatarButton';
export { UsedAvatarButtonSchema, UsedAvatarButtonDTO } from './objects/usedAvatarButton';
export { PresetParameterSchema, PresetParameterDTO, PresetParameterFormSchema, PresetParameterFormDTO } from './objects/presetParameter';
export { BaseGroupSchema, BaseGroupDTO } from './objects/baseGroup';
export { BaseButtonSchema, BaseButtonDTO } from './objects/baseButton';
export { VrcParameterSchema, VrcParameter } from './objects/vrcParameter';
// ------------------------------ Primitives ------------------------------ //
export { parameterPathSchema, parameterValueAvatarIdSchema, parameterValueStringSchema, parameterValueNumberSchema, parameterValueSchema, parameterValueFormSchema, parameterValueOrAvatarSchema, parameterValueOrAvatarFormSchema, parameterValueSimpleSchema, parameterValueOrAvatarSimpleSchema } from './primitives/parameter';
// ------------------------------ API ------------------------------ //
export { ApiResponseSchema, ApiResponseDTO } from './api';

export { LoginTokenSchema, LoginTokenDTO, LoginFormSchema, LoginFormDTO } from './api/login/login';
export { RegisterInfoSchema, RegisterInfoDTO, RegisterFormSchema, RegisterFormDTO, RegisterWithKeyFormSchema, RegisterWithKeyFormDTO } from './api/register/register';
export { AccountPageSchema, AccountPageDTO, ProfileFormSchema, ProfileFormDTO } from './api/account/account';
export { ProfilePageSchema, ProfilePageDTO } from './api/profile/profile';
export { LayoutFormSchema, LayoutFormDTO, LayoutCopySchema, LayoutCopyDTO } from './api/profile/layout/layout';
export { ParameterBadgeFormSchema, ParameterBadgeFormDTO } from './api/profile/layout/parameterBadges/parameterBadges';
export { ParameterGroupFormSchema, ParameterGroupFormDTO, ParameterGroupCopySchema, ParameterGroupCopyDTO } from './api/profile/parameters/parameterGroup';
export { ParameterButtonFormSchema, ParameterButtonFormDTO, ParameterButtonCopySchema, ParameterButtonCopyDTO } from './api/profile/parameters/parameterButton';
export { PresetGroupFormSchema, PresetGroupFormDTO, PresetGroupCopySchema, PresetGroupCopyDTO } from './api/profile/presets/presetGroup';
export { PresetButtonFormSchema, PresetButtonFormDTO, PresetButtonCopySchema, PresetButtonCopyDTO } from './api/profile/presets/presetButton';
export { AvatarGroupFormSchema, AvatarGroupFormDTO, AvatarGroupCopySchema, AvatarGroupCopyDTO } from './api/profile/avatars/avatarGroup';
export { AvatarButtonFormSchema, AvatarButtonFormDTO, AvatarButtonCopySchema, AvatarButtonCopyDTO } from './api/profile/avatars/avatarButton';
export { InteractionKeysFormSchema, InteractionKeysFormDTO } from './api/profile/interactionKeys/interactionKeys';
export { StylePageSchema, StylePageDTO } from './api/style/style';
export { TiersPageSchema, TiersPageDTO, UseInviteKeyFormSchema, UseInviteKeyFormDTO, GeneratedInviteKeySchema, GeneratedInviteKeyDTO } from './api/tiers/tiers';
// ------------------------------ Shared ------------------------------ //
export { BaseFormDTO, BaseFormSchema, BaseIdDTO, BaseIdSchema, BaseNullableIdDTO, BaseNullableIdSchema, IdSchema, passwordSchema, usernameSchema, OrderSchema, OrderDTO, interactionKeySchema } from './shared';
// ------------------------------ Other ------------------------------ //
export { convertParameterValueFromString, trimNumberDecimals, imageUrlPathToUrl, imageOrientationToAspectRatio } from './util';
// ------------------------------ Const ------------------------------ //
export const URL_LIVE = 'https://changemyavatarparams.com';
export const URL = process.env.NODE_ENV === 'production' ? URL_LIVE : 'http://localhost:8080';

