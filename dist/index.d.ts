import { ReactNode } from 'react';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
export { WebsitePageDTO } from './types/websitePage';
export { ApproveFilesDTO } from './types/approveFiles';
export { LoginSchema, LoginDTO, LoginTokenDTO } from './types/login';
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/register';
export { ProfileFormSchema, ProfileFormDTO, ProfileDTO, ClientDTO } from './types/profile';
export { BackgroundDTO } from './types/background';
export { ButtonStyleDTO } from './types/buttonStyle';
export { TiersDTO, TierDTO, TierType } from './types/tier';
export { AvatarFormSchema, AvatarFormDTO, AvatarPageDTO, AvatarDTO } from './types/avatar';
export { ControlParametersFormSchema, ControlParametersFormDTO, ControlParameterDTO, ControlParameterRole } from './types/controlParameters';
export { StateBadgeKey, StateBadgeSchema, StateBadgesSchema, StateBadgeDTO, StateBadgesDTO } from './types/stateBadge';
export { LayoutDTO, LayoutFormSchema, LayoutFormDTO, LayoutWidth } from './types/layout';
export { ButtonFormSchema, ButtonFormDTO, ButtonDTO, ButtonType, ButtonImageOrientation } from './types/button';
export { UploadedFileDTO, FileUploadDTO } from './types/files';
export { UpdateSchema, UpdatesFormSchema, UpdatesFormDTO, UpdateDTO } from './types/update';
export { CmapApiError, CmapApiErrorDTO, BaseIdSchema, RequiredIdSchema, BaseParentIdSchema, ParameterValueType } from './types/shared';
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
