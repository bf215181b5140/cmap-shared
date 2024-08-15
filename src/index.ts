import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';

/* ------------------------------------------------------------ */
// Types
/* ------------------------------------------------------------ */
// WebsitePage
export { WebsitePageDTO } from './types/OLD/websitePage';
// Admin approve files
export { ApproveFilesDTO } from './types/OLD/admin/approveFiles';
// Login
export { LoginSchema, LoginDTO, LoginTokenDTO } from './types/OLD/login';
// Register
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/OLD/register';
// Profile
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO, ClientDTO } from './types/profile';
// Background
export { BackgroundDTO } from './types/OLD/background';
// LayoutStyle
export { LayoutStyleDTO } from './types/OLD/style';
// Tiers
export { TiersDTO, TierDTO, TierType } from './types/OLD/tier';
// Avatar
export { AvatarFormSchema, AvatarFormDTO, AvatarPageDTO, AvatarDTO } from './types/OLD/layout';
// Control parameters
export { ControlParametersFormSchema, ControlParametersFormDTO, ControlParameterDTO, ControlParameterRole } from './types/OLD/controlParameters';
// State badges
export { StateBadgeKey, StateBadgeSchema, StateBadgesSchema, StateBadgeDTO, StateBadgesDTO } from './types/OLD/stateBadge';
// Layout
export { LayoutDTO, GroupFormSchema, LayoutFormDTO, GroupWidth } from './types/OLD/group';
// Button
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation } from './types/OLD/button';
// Files
export { UploadedFileDTO, FileUploadDTO } from './types/OLD/uploadedFile';
// Update
export { UpdateSchema, UpdatesFormSchema, UpdatesFormDTO, UpdateDTO } from './types/OLD/update';
// Order
export { OrderSchema, OrderListSchema, OrderDTO, OrderListDTO } from './types/OLD/order';
// Client state
export { ClientStateParamsSchema, ClientStateParamFormSchema, ClientStateParamSchema, ClientStateParamsDTO, ClientStateParamFormDTO, ClientStateParamDTO, ClientStateDTO } from './types/OLD/clientState';
// Shared
export { CmapApiError, CmapApiErrorDTO, BaseNullableIdSchema, BaseIdSchema, BaseFormSchema, ParameterValueType } from './types/shared';
// Error
export { CmapErrorSchema, CmapErrorDTO } from './types/error';

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
