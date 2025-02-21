// ------------------------------ Enums ------------------------------ //
export { ParameterButtonTypeSchema, ParameterButtonType } from './enums/parameterButtonType';
export { ClientVisibilitySchema, ClientVisibility } from './enums/clientVisibility';
export { GroupWidthSchema, GroupWidth } from './enums/groupWidth';
export { ImageOrientationSchema, ImageOrientation } from './enums/imageOrientation';
export { NotificationTypeSchema, NotificationType } from './enums/notificationType';
export { ParameterBadgeTypeSchema, ParameterBadgeType } from './enums/parameterBadgeType';
export { VisibilityParameterConditionSchema, VisibilityParameterCondition } from './enums/visibilityParameterCondition';
// ------------------------------ Objects ------------------------------ //
export { VrcParameterSchema, VrcParameter } from './objects/vrcParameter';
export { BackgroundDTO, BackgroundSchema } from './objects/background';
export { ParameterButtonDTO, ParameterButtonSchema } from './objects/parameterButton';
export { ClientDTO, ClientSchema } from './objects/client';
export { GroupDTO, GroupSchema } from './objects/group';
export { InteractionKeyDTO, InteractionKeySchema } from './objects/interactionKey';
export { LayoutDTO, LayoutSchema } from './objects/layout';
export { InviteKeyDTO, InviteKeySchema } from './objects/inviteKey';
export { ParameterBadgeDTO, ParameterBadgeSchema } from './objects/parameterBadge';
export { ThemeDTO, ThemeSchema } from './objects/theme';
export { TierDTO, TierSchema } from './objects/tier';
export { UpdateDTO, UpdateSchema } from './objects/update';
export { UploadedFileDTO, UploadedFileSchema } from './objects/uploadedFile';
export { KeyValueSchema, KeyValueDTO } from './objects/keyValue';
export { CallbackParameterSchema, CallbackParameterDTO, CallbackParameterFormSchema, CallbackParameterFormDTO } from './objects/callbackParameter';
export { VisibilityParameterSchema, VisibilityParameterDTO, VisibilityParameterFormSchema, VisibilityParameterFormDTO } from './objects/visibilityParameter';
export { PresetButtonSchema, PresetButtonDTO } from './objects/presetButton';
export { ParameterSchema, ParameterDTO } from './objects/parameter';
export { UseParameterButtonSchema, UseParameterButtonDTO } from './objects/useParameterButton';
export { UsedParameterButtonSchema, UsedParameterButtonDTO } from './objects/usedParameterButton';
export { UsePresetButtonSchema, UsePresetButtonDTO } from './objects/usePresetButton';
export { UsedPresetButtonSchema, UsedPresetButtonDTO } from './objects/usedPresetButton';
export { PresetParameterSchema, PresetParameterDTO, PresetParameterFormSchema, PresetParameterFormDTO } from './objects/presetParameter';
export { AvatarButtonSchema, AvatarButtonDTO } from './objects/avatarButton';
export { BaseButtonSchema, BaseButtonDTO } from './objects/baseButton';
// ------------------------------ Primitives ------------------------------ //
export { parameterPathSchema, parameterValueAvatarIdSchema, parameterValueStringSchema, parameterValueNumberSchema, parameterValueSchema, parameterValueFormSchema, parameterValueOrAvatarSchema, parameterValueOrAvatarFormSchema, parameterValueSimpleSchema, parameterValueOrAvatarSimpleSchema } from './primitives/parameter';
// ------------------------------ API ------------------------------ //
export { ApiResponseSchema, ApiResponseDTO } from './api';

export { LoginTokenSchema, LoginTokenDTO, LoginFormSchema, LoginFormDTO } from './api/login/login';
export { RegisterInfoSchema, RegisterInfoDTO, RegisterFormSchema, RegisterFormDTO, RegisterWithKeyFormSchema, RegisterWithKeyFormDTO } from './api/register/register';
export { ProfilePageSchema, ProfilePageDTO, ProfileFormSchema, ProfileFormDTO } from './api/profile/profile';
export { LayoutsPageSchema, LayoutsPageDTO } from './api/layouts/layouts';
export { ParameterBadgeFormSchema, ParameterBadgeFormDTO } from './api/layouts/layout/parameterBadges/parameterBadges';
export { LayoutFormSchema, LayoutFormDTO, LayoutCopySchema, LayoutCopyDTO } from './api/layouts/layout/layout';
export { GroupFormSchema, GroupFormDTO, GroupCopySchema, GroupCopyDTO } from './api/layouts/group/group';
export { ParameterButtonFormSchema, ParameterButtonFormDTO, ParameterButtonCopySchema, ParameterButtonCopyDTO } from './api/layouts/parameterButton/parameterButton';
export { InteractionKeysPageSchema, InteractionKeysPageDTO, InteractionKeysFormSchema, InteractionKeysFormDTO } from './api/interactionKeys/interactionKeys';
export { StylePageSchema, StylePageDTO } from './api/style/style';
export { TiersPageSchema, TiersPageDTO, UseInviteKeyFormSchema, UseInviteKeyFormDTO, GeneratedInviteKeySchema, GeneratedInviteKeyDTO } from './api/tiers/tiers';
export { PresetButtonFormSchema, PresetButtonFormDTO, PresetButtonCopySchema, PresetButtonCopyDTO } from './api/layouts/layout/presetButtons/presetButtons';
export { AvatarButtonsPageSchema, AvatarButtonsPageDTO } from './api/avatarButtons/avatarButtons';
export { AvatarButtonFormSchema, AvatarButtonFormDTO } from './api/avatarButtons/avatarButton/avatarButton';
// ------------------------------ Shared ------------------------------ //
export { BaseFormDTO, BaseFormSchema, BaseIdDTO, BaseIdSchema, BaseNullableIdDTO, BaseNullableIdSchema, IdSchema, passwordSchema, usernameSchema, OrderSchema, OrderDTO, interactionKeySchema } from './shared';
// ------------------------------ Other ------------------------------ //
export { convertParameterValueFromString, trimNumberDecimals, imageUrlPathToUrl, imageOrientationToAspectRatio } from './util';
// ------------------------------ Const ------------------------------ //
export const URL_LIVE = 'https://changemyavatarparams.com';
export const URL = process.env.NODE_ENV === 'production' ? URL_LIVE : 'http://localhost:8080';

