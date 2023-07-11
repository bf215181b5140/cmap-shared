import { ReactNode } from "react";
import { AvatarsPageDto, ProfilePageDto } from './dtos';
import { IgnoredParams } from './const';

export { IgnoredParams };
export { ProfilePageDto, AvatarsPageDto };

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
    client: ClientDto;
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
}

export interface ClientWithActivity extends ClientDto {
    isActive: boolean;
    isConnected: boolean;
}

export interface ReactProps {
    children?: ReactNode;
}

// -- Classes -- //
export class RegistrationFormDto {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    registrationKey: string;
}

class BaseDto {
    id: string = null;
    createDate: Date;
    updateDate: Date;
}

class BaseParentDto extends BaseDto {
    parentId?: string;
}

export class TierDto {
    tier: ClientTier;
    rank: number;
    color: string;
    avatars: number;
    layouts: number;
    buttons: number;
    controlParameters: number;
    useCost: boolean;
    hp: boolean;
}

export class BackgroundDto {
    className: string;
    Label: string;
    tier: TierDto;
}

export class ButtonStyleDto {
    className: string;
    Label: string;
    tier: TierDto;
}

export class ClientDto extends BaseDto {
    username: string;
    displayName: string;
    bio: string | null;
    image: string | null;
    hidden: boolean;
    tier: TierDto;
    background: BackgroundDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[] | undefined | null;
}

export class AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[] | undefined | null;
    parameters: ParameterDto[] | undefined | null;
    controlParameters: ControlParameterDto[] | undefined | null;
}

export class ParameterDto extends BaseParentDto {
    label: string;
    path: string = '/avatar/parameters/';
    valueType: ValueType;
}

export class ControlParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string = '/avatar/parameters/';
    valuePrimary: string;
    valueSecondary: string;
    valueType: ValueType;
}

export class LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    width: ContentBoxWidth = ContentBoxWidth.Full;
    buttons: ButtonDto[] | undefined | null;
}

export class ButtonDto extends BaseParentDto {
    label: string;
    path: string = '/avatar/parameters/';
    value: string;
    valueAlt: string;
    valueType: ValueType = ValueType.Int;
    buttonType: ButtonType = ButtonType.Button;
    image: string | null;
    imageOrientation: ButtonImageOrientation = ButtonImageOrientation.Horizontal;
    order: number;
    useCost: number | null;
    controlParameter: ControlParameterDto | null;
    controlParameterId: string | undefined | null;
}

export class TierKeyDto {
    key: string;
    tier: ClientTier;
    used: boolean;
}

export class FileUploadDto {
    parentType: string;
    parentId: string;
    file: File;
}

export class FieldOption {
    key: string;
    value: string;
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
