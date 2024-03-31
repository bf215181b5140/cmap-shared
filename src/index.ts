import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
// import { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
// import { BaseIdSchema, BaseParentIdSchema, CmapApiError, CmapApiErrorDTO, RequiredIdSchema, ParameterValueType };
// import { BackgroundDTO };
// import { ButtonStyleDTO };
// import { ProfileDTO, ProfileFormDTO, ProfileFormSchema, ClientDTO } from;
// import { TiersDTO, TierDTO, TierType };
// import { AvatarFormDTO, AvatarFormSchema, AvatarPageDTO, AvatarDTO };
// import { ButtonFormDTO, ButtonFormSchema, ButtonDTO, ButtonImageOrientation, ButtonType };
// import { ControlParametersFormDTO, ControlParametersFormSchema, ControlParameterDTO, ControlParameterRole };
// import { LayoutFormDTO, LayoutFormSchema, LayoutDTO, LayoutWidth };
// import { FileUploadDTO, UploadedFileDTO };
// import { WebsitePageDTO };
// import { ApproveFilesDTO };

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
// Layout
export { LayoutDTO, LayoutFormSchema, LayoutFormDTO, LayoutWidth } from './types/layout';
// Button
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation } from './types/button';
// Files
export { UploadedFileDTO, FileUploadDTO } from './types/files';
// Version
export { ClientVersionSchema, ClientVersionFormSchema, ClientVersionFormDTO, ClientVersionDTO } from './types/version';
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
