// ------------------------------ Enums ------------------------------ //
export { ButtonTypeSchema, ButtonType } from './enums/buttonType';
export { ClientVisibilitySchema, ClientVisibility } from './enums/clientVisibility';
export { GroupWidthSchema, GroupWidth } from './enums/groupWidth';
export { ImageOrientationSchema, ImageOrientation } from './enums/imageOrientation';
export { NotificationTypeSchema, NotificationType } from './enums/notificationType';
export { ParameterBadgeTypeSchema, ParameterBadgeType } from './enums/parameterBadgeType';
export { VisibilityParameterConditionSchema, VisibilityParameterCondition } from './enums/visibilityParameterCondition';
// ------------------------------ Objects ------------------------------ //
export { VrcParameterSchema, VrcParameter } from './objects/vrcParameter';
export { BackgroundDTO, BackgroundSchema } from './objects/background';
export { ButtonDTO, ButtonSchema } from './objects/button';
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
export { ClientStateSchema, ClientStateDTO } from './objects/clientState';
export { TrackedParametersMap, TrackedParameterSchema, TrackedParameterDTO, TrackedParametersSchema, TrackedParametersDTO } from './objects/trackedParameters';
export { KeyValueSchema, KeyValueDTO } from './objects/keyValue';
export { CallbackParameterSchema, CallbackParameterDTO } from './objects/callbackParameter';
export { VisibilityParameterSchema, VisibilityParameterDTO } from './objects/visibilityParameter';
// ------------------------------ API ------------------------------ //
export { ApiResponseSchema, ApiResponseDTO } from './api';

export { LoginTokenSchema, LoginTokenDTO, LoginFormSchema, LoginFormDTO } from './api/login/login';
export { RegisterInfoSchema, RegisterInfoDTO, RegisterFormSchema, RegisterFormDTO, RegisterWithKeyFormSchema, RegisterWithKeyFormDTO } from './api/register/register';
export { StatePageSchema, StatePageDTO } from './api/state/state';
export { ProfilePageSchema, ProfilePageDTO, ProfileFormSchema, ProfileFormDTO } from './api/profile/profile';
export { LayoutsPageSchema, LayoutsPageDTO } from './api/layouts/layouts';
export { ParameterBadgeFormSchema, ParameterBadgeFormDTO } from './api/layouts/layout/parameterBadges/parameterBadges';
export { LayoutFormSchema, LayoutFormDTO, LayoutCopySchema, LayoutCopyDTO } from './api/layouts/layout/layout';
export { GroupFormSchema, GroupFormDTO, GroupCopySchema, GroupCopyDTO } from './api/layouts/group/group';
export { ButtonFormSchema, ButtonFormDTO, ButtonCopySchema, ButtonCopyDTO } from './api/layouts/button/button';
export { InteractionKeysPageSchema, InteractionKeysPageDTO, InteractionKeysFormSchema, InteractionKeysFormDTO } from './api/interactionKeys/interactionKeys';
export { StylePageSchema, StylePageDTO } from './api/style/style';
export { TiersPageSchema, TiersPageDTO, UseInviteKeyFormSchema, UseInviteKeyFormDTO, GeneratedInviteKeySchema, GeneratedInviteKeyDTO } from './api/tiers/tiers';
// ------------------------------ Shared ------------------------------ //
export { BaseFormDTO, BaseFormSchema, BaseIdDTO, BaseIdSchema, BaseNullableIdDTO, BaseNullableIdSchema, IdSchema, parameterPathSchema, parameterValueObjectOrAvatarSchema, parameterValueObjectSchema, parameterValueOrAvatarSchema, parameterValueSchema, passwordSchema, usernameSchema, vrcAvatarIdSchema, OrderSchema, OrderDTO } from './shared';
// ------------------------------ Frontend ------------------------------ //
export { UsedButtonSchema, UsedButtonDTO } from './api/website';
// ------------------------------ Other ------------------------------ //
export { convertParameterValueFromString } from './util';
// ------------------------------ Const ------------------------------ //
export const URL_LIVE = 'https://changemyavatarparams.com';
export const URL = process.env.NODE_ENV === 'production' ? URL_LIVE : 'http://localhost:8080';

