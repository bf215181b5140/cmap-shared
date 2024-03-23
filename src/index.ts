import { ReactNode } from 'react';
import { AvatarsPageDto, ProfilePageDto } from './dtos';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
import { LoginSchema, LoginDTO, LoginTokenDTO } from './types/api/login';
import { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO } from './types/api/register';
import { CmapApiError, CmapApiErrorDTO } from './types/api';
import { UploadedFileDTO } from './types/api/files';
import { ClientDTO } from './types/api/client';
import { ButtonDTO } from './types/api/button';

// API
export { CmapApiError, CmapApiErrorDTO };
// Login
export { LoginSchema, LoginDTO, LoginTokenDTO };
// Register
export { RegisterRequestDTO, RegisterInfoDTO, RegisterFormSchema, RegisterSchema, RegisterKeySchema, RegisterDTO, RegisterFormDTO };
// Files
export { UploadedFileDTO };
// Client
export { ClientDTO };
// Button
export { ButtonDTO };

export { IgnoredParams };
export { ProfilePageDto, AvatarsPageDto };
export { theme };

// -- Interfaces -- //
export interface VrcParameter {
    path: string;
    value: boolean | number | string;
}

export interface UsedButton {
    buttonId: string;
    value: string;
}

export interface Profile {
    client: ClientDTO;
    backgrounds: BackgroundDto[];
    buttonStyles: ButtonStyleDto[];
}

export interface Avatars {
    tier: TierDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}

export interface ParametersForm {
    avatarId: string;
    parameters: ParameterDto[];
}

export interface ControlParametersForm {
    avatarId: string;
    controlParameters: ControlParameterDto[];
}

export interface Tiers {
    tiers: TierDto[];
    clientTier: TierDto;
    // tierKeys: TierKeyDto[];
}

export interface ClientWithActivity extends ClientDto {
    isActive: boolean;
    isConnected: boolean;
}

export interface ReactProps {
    children?: ReactNode;
}

// -- Classes -- //
class BaseDto {
    id: string | undefined | null;
    createDate: Date = new Date();
    updateDate: Date = new Date();
}

class BaseParentDto extends BaseDto {
    parentId?: string;
}

export class TierDto {
    tier: ClientTier = ClientTier.Basic;
    rank: number = 0;
    color: string = '';
    avatars: number = 0;
    layouts: number = 0;
    buttons: number = 0;
    controlParameters: number = 0;
    useCost: boolean = false;
    hp: boolean = false;
}

export class BackgroundDto {
    className: string = '';
    Label: string = '';
    tier: TierDto = new TierDto();
}

export class ButtonStyleDto {
    className: string = '';
    Label: string = '';
    tier: TierDto = new TierDto();
}

export class ClientDto extends BaseDto {
    username: string = '';
    displayName: string = '';
    bio: string | null = '';
    image: typeof UploadedFileDTO | null = null;
    hidden: boolean = false;
    tier: TierDto = new TierDto();
    background: BackgroundDto = new BackgroundDto();
    buttonStyle: ButtonStyleDto = new ButtonStyleDto();
    avatars: AvatarDto[] | undefined | null;
}

export class AvatarDto extends BaseParentDto {
    vrcId: string = '';
    label: string = '';
    default: boolean = false;
    layouts: LayoutDto[] | undefined | null;
    parameters: ParameterDto[] | undefined | null;
    controlParameters: ControlParameterDto[] | undefined | null;
}

export class ParameterDto extends BaseParentDto {
    label: string = '';
    path: string = '';
    valueType: ValueType = ValueType.Int;
}

export class ControlParameterDto extends BaseParentDto {
    label: string = '';
    role: ParameterRole = ParameterRole.Callback;
    path: string = '';
    valuePrimary: string = '';
    valueSecondary: string = '';
    valueType: ValueType = ValueType.Int;
}

export class LayoutDto extends BaseParentDto {
    label: string = '';
    order: number = 0;
    width: ContentBoxWidth = ContentBoxWidth.None;
    buttons: ButtonDto[] | undefined | null;
}

export class ButtonDto extends BaseParentDto {
    label: string = '';
    path: string = '';
    value: string = '';
    valueAlt: string = '';
    valueType: ValueType = ValueType.Int;
    buttonType: ButtonType = ButtonType.Button;
    image: string | null = null;
    imageOrientation: ButtonImageOrientation = ButtonImageOrientation.Square;
    order: number = 0;
    useCost: number | null = null;
    controlParameter: ControlParameterDto | null = null;
    controlParameterId: string | undefined | null;
}

export class TierKeyDto {
    key: string = '';
    tier: ClientTier = ClientTier.Basic;
    used: boolean = false;
}

export class FileUploadDto {
    parentType: string = '';
    parentId: string = '';
    file: File | null = null;
}

export class FieldOption {
    key: string = '';
    value: string = '';
}

// -- Enums -- //
export enum ClientTier {
    Basic = 'Basic',
    Standard = 'Standard',
    Premium = 'Premium'
}

export enum ParameterRole {
    UseCost = 'Use cost',
    HP = 'HP',
    Callback = 'Callback',
}

export enum ValueType {
    Int = 'Int',
    Float = 'Float',
    Bool = 'Bool',
}

export enum ButtonType {
    Button = 'button',
    Slider = 'slider',
    Toggle = 'toggle',
}

export enum ButtonImageOrientation {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
    Square = 'Square',
}

export enum InputType {
    Text = 'text',
    Button = 'button',
    Checkbox = 'checkbox',
    Date = 'date',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Number = 'number',
    Password = 'password',
    Radio = 'radio',
    Range = 'range',
    Reset = 'reset',
    Submit = 'submit',
    Time = 'time',
    Url = 'url',
    Label = 'label',
    Boolean = 'boolean',
    Select = 'select',
    Textarea = 'textarea',
}

export enum ContentBoxWidth {
    None = 'none',
    Third = 'third',
    Half = 'half',
    Full = 'full'
}
