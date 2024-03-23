import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
import { LoginSchema, LoginDTO, LoginTokenDTO } from './types/api/login';
import { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/api/register';
import { BaseIdSchema, BaseParentIdSchema, CmapApiError, CmapApiErrorDTO, RequiredIdSchema } from './types/api/shared';
import { UploadedFileDTO, FileUploadDTO } from './types/dto/files';
import { ClientDTO } from './types/dto/client';
import { ButtonDTO, ButtonImageOrientation, ButtonType } from './types/dto/button';
import { AvatarDTO } from './types/dto/avatar';
import { BackgroundDTO } from './types/dto/background';
import { ButtonStyleDTO } from './types/dto/buttonStyle';
import { ControlParameterDTO, ControlParameterRole } from './types/dto/controlParameter';
import { LayoutDTO } from './types/dto/layout';
import { ParameterValueType } from './types/dto/shared';
import { TierDTO, TierType } from './types/dto/tier';
import { ProfileDTO, ProfileFormDTO, ProfileFormSchema } from './types/api/profile';
import { TiersDTO } from './types/api/tiers';
import { AvatarFormDTO, AvatarFormSchema } from './types/api/avatar';
import { ButtonFormDTO, ButtonFormSchema } from './types/api/button';
import { ControlParametersFormDTO, ControlParametersFormSchema } from './types/api/controlParameters';
import { LayoutFormDTO, LayoutFormSchema } from './types/api/layout';

/* ------------------------------------------------------------ */
// API
/* ------------------------------------------------------------ */
// Login
export { LoginSchema, LoginDTO, LoginTokenDTO };
// Register
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
// Profile
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO };
// Tiers
export { TiersDTO };
// Avatar
export { AvatarFormSchema, AvatarFormDTO };
// Control parameters
export { ControlParametersFormSchema, ControlParametersFormDTO };
// Layout
export { LayoutFormSchema, LayoutFormDTO };
// Button
export { ButtonFormSchema, ButtonFormDTO };
// Shared
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema };

/* ------------------------------------------------------------ */
// DTO
/* ------------------------------------------------------------ */
// Client
export { ClientDTO };
// Background
export { TierDTO, TierType };
// Background
export { BackgroundDTO };
// ButtonStyle
export { ButtonStyleDTO };
// Avatar
export { AvatarDTO };
// ControlParameter
export { ControlParameterDTO, ControlParameterRole };
// Avatar
export { LayoutDTO };
// Button
export { ButtonDTO, ButtonType, ButtonImageOrientation };
// Files
export { UploadedFileDTO, FileUploadDTO };
// Shared
export { ParameterValueType };

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
