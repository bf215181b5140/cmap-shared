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
export { LoginSchema, LoginDTO, LoginTokenDTO };
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO };
export { TiersDTO };
export { AvatarFormSchema, AvatarFormDTO };
export { ControlParametersFormSchema, ControlParametersFormDTO };
export { LayoutFormSchema, LayoutFormDTO };
export { ButtonFormSchema, ButtonFormDTO };
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema };
export { ClientDTO };
export { TierDTO, TierType };
export { BackgroundDTO };
export { ButtonStyleDTO };
export { AvatarDTO };
export { ControlParameterDTO, ControlParameterRole };
export { LayoutDTO };
export { ButtonDTO, ButtonType, ButtonImageOrientation };
export { UploadedFileDTO, FileUploadDTO };
export { ParameterValueType };
export { IgnoredParams };
export { theme };
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
export declare class FieldOption {
    key: string;
    value: string;
}
export declare enum ContentBoxWidth {
    None = "none",
    Third = "third",
    Half = "half",
    Full = "full"
}
