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
import { LayoutFormDTO, LayoutFormSchema, LayoutDTO } from './types/layout';
import { FileUploadDTO, UploadedFileDTO } from './types/files';
export { LoginSchema, LoginDTO, LoginTokenDTO };
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO, ClientDTO };
export { BackgroundDTO };
export { ButtonStyleDTO };
export { TiersDTO, TierDTO, TierType };
export { AvatarFormSchema, AvatarFormDTO, AvatarPageDTO, AvatarDTO };
export { ControlParametersFormSchema, ControlParametersFormDTO, ControlParameterDTO, ControlParameterRole };
export { LayoutDTO, LayoutFormSchema, LayoutFormDTO };
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation };
export { UploadedFileDTO, FileUploadDTO };
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema, ParameterValueType };
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
