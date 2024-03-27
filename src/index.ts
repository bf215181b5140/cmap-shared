import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
import { LoginSchema, LoginDTO, LoginTokenDTO } from './types/login';
import { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/register';
import { BaseIdSchema, BaseParentIdSchema, CmapApiError, CmapApiErrorDTO, RequiredIdSchema, ParameterValueType } from './types/shared';
import { BackgroundDTO } from './types/background';
import { ButtonStyleDTO } from './types/buttonStyle';
import { ProfileDTO, ProfileFormDTO, ProfileFormSchema, ClientDTO } from './types/profile';
import { TiersDTO, TierDTO, TierType } from './types/tier';
import { AvatarFormDTO, AvatarFormSchema, AvatarPageDTO, AvatarDTO } from './types/avatar';
import { ButtonFormDTO, ButtonFormSchema, ButtonDTO, ButtonImageOrientation, ButtonType } from './types/button';
import { ControlParametersFormDTO, ControlParametersFormSchema, ControlParameterDTO, ControlParameterRole } from './types/controlParameters';
import { LayoutFormDTO, LayoutFormSchema, LayoutDTO, LayoutWidth } from './types/layout';
import { FileUploadDTO, UploadedFileDTO } from './types/files';
import { WebsitePageDTO } from './types/websitePage';
import { ApproveFilesDTO } from './types/approveFiles';

/* ------------------------------------------------------------ */
// Types
/* ------------------------------------------------------------ */
// Login
export { LoginSchema, LoginDTO, LoginTokenDTO };
// Register
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
// WebsitePage
export { WebsitePageDTO };
// Admin approve files
export { ApproveFilesDTO };
// Profile
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO, ClientDTO };
// Background
export { BackgroundDTO };
// ButtonStyle
export { ButtonStyleDTO };
// Tiers
export { TiersDTO, TierDTO, TierType };
// Avatar
export { AvatarFormSchema, AvatarFormDTO, AvatarPageDTO, AvatarDTO };
// Control parameters
export { ControlParametersFormSchema, ControlParametersFormDTO, ControlParameterDTO, ControlParameterRole };
// Layout
export { LayoutDTO, LayoutFormSchema, LayoutFormDTO, LayoutWidth };
// Button
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation };
// Files
export { UploadedFileDTO, FileUploadDTO };
// Shared
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema, ParameterValueType };

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
