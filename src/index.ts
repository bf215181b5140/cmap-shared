import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';

/* ------------------------------------------------------------ */
// Types
/* ------------------------------------------------------------ */
// WebsitePage
export { WebsitePageDTO } from './types/websitePage';
// Admin approve files
export { ApproveFilesDTO } from './types/approveFiles';
// Login
export { LoginSchema, LoginDTO, LoginTokenDTO } from './types/login';
// Register
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/register';
// Profile
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO, ClientDTO } from './types/profile';
// Background
export { BackgroundDTO } from './types/background';
// ButtonStyle
export { ButtonStyleDTO } from './types/buttonStyle';
// Tiers
export { TiersDTO, TierDTO, TierType } from './types/tier';
// Avatar
export { AvatarFormSchema, AvatarFormDTO, AvatarPageDTO, AvatarDTO } from './types/avatar';
// Control parameters
export { ControlParametersFormSchema, ControlParametersFormDTO, ControlParameterDTO, ControlParameterRole } from './types/controlParameters';
// State badges
export { StateBadgeKey, StateBadgeSchema, StateBadgesSchema, StateBadgeDTO, StateBadgesDTO } from './types/stateBadge';
// Layout
export { LayoutDTO, LayoutFormSchema, LayoutFormDTO, LayoutWidth } from './types/layout';
// Button
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation } from './types/button';
// Files
export { UploadedFileDTO, FileUploadDTO } from './types/files';
// Update
export { UpdateSchema, UpdatesFormSchema, UpdatesFormDTO, UpdateDTO } from './types/update';
// Order
export { OrderSchema, OrderListSchema, OrderDTO, OrderListDTO } from './types/order';
// Client state
export { ClientStateParamsSchema, ClientStateParamSchema, ClientStateParamsDTO, ClientStateParamDTO, ClientStateDTO } from './types/clientState';
// Shared
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema, ParameterValueType } from './types/shared';

/* ------------------------------------------------------------ */
// Other
/* ------------------------------------------------------------ */
export { IgnoredParams };
export { theme };

/* ------------------------------------------------------------ */
// Temp
/* ------------------------------------------------------------ */
export interface VrcParameter {
    path: string;
    value: boolean | number | string;
}

export interface UsedButton {
    buttonId: string;
    value: string;
}

export interface ReactProps {
    children?: ReactNode;
}

export class FieldOption {
    key: string = '';
    value: string = '';
}

export enum ContentBoxWidth {
    None = 'none',
    Third = 'third',
    Half = 'half',
    Full = 'full'
}
