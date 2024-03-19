import { ReactNode } from "react";
import { AvatarsPageDto, ProfilePageDto } from './dtos';
import { IgnoredParams } from './const';
import { theme } from './react/theme';
import { LoginFormDTO, LoginFormSchema, LoginTokenDTO } from './types/api/login';
import { RegisterFormDTO, RegisterSchema, RegisterWithKeySchema } from './types/api/register';
export { LoginFormSchema, LoginFormDTO, LoginTokenDTO };
export { RegisterSchema, RegisterWithKeySchema, RegisterFormDTO };
export { IgnoredParams };
export { ProfilePageDto, AvatarsPageDto };
export { theme };
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
export interface RegistrationInfoDto {
    available: boolean;
    keyRequired: boolean;
}
export interface RegistrationFormDto {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    registrationKey: string;
    fingerprint: string;
}
interface BaseDto {
    id: string | undefined | null;
    createDate: Date;
    updateDate: Date;
}
interface BaseParentDto extends BaseDto {
    parentId?: string;
}
export interface TierDto {
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
export interface BackgroundDto {
    className: string;
    Label: string;
    tier: TierDto;
}
export interface ButtonStyleDto {
    className: string;
    Label: string;
    tier: TierDto;
}
export interface ClientDto extends BaseDto {
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
export interface AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[] | undefined | null;
    parameters: ParameterDto[] | undefined | null;
    controlParameters: ControlParameterDto[] | undefined | null;
}
export interface ParameterDto extends BaseParentDto {
    label: string;
    path: string;
    valueType: ValueType;
}
export interface ControlParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string;
    valuePrimary: string;
    valueSecondary: string;
    valueType: ValueType;
}
export interface LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    width: ContentBoxWidth;
    buttons: ButtonDto[] | undefined | null;
}
export interface ButtonDto extends BaseParentDto {
    label: string;
    path: string;
    value: string;
    valueAlt: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    imageOrientation: ButtonImageOrientation;
    order: number;
    useCost: number | null;
    controlParameter: ControlParameterDto | null;
    controlParameterId: string | undefined | null;
}
export interface TierKeyDto {
    key: string;
    tier: ClientTier;
    used: boolean;
}
export interface FileUploadDto {
    parentType: string;
    parentId: string;
    file: File;
}
export interface FieldOption {
    key: string;
    value: string;
}
export declare enum ClientTier {
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium"
}
export declare enum ParameterRole {
    UseCost = "Use cost",
    HP = "HP",
    Callback = "Callback"
}
export declare enum ValueType {
    Int = "Int",
    Float = "Float",
    Bool = "Bool"
}
export declare enum ButtonType {
    Button = "button",
    Slider = "slider",
    Toggle = "toggle"
}
export declare enum ButtonImageOrientation {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
    Square = "Square"
}
export declare enum InputType {
    Text = "text",
    Button = "button",
    Checkbox = "checkbox",
    Date = "date",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Number = "number",
    Password = "password",
    Radio = "radio",
    Range = "range",
    Reset = "reset",
    Submit = "submit",
    Time = "time",
    Url = "url",
    Label = "label",
    Boolean = "boolean",
    Select = "select",
    Textarea = "textarea"
}
export declare enum ContentBoxWidth {
    None = "none",
    Third = "third",
    Half = "half",
    Full = "full"
}
