export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
export interface Profile {
    tier: TierDto;
    client: ClientDto;
}
export interface Avatars {
    tier: TierDto;
    avatars: AvatarDto[];
}
export interface ActivationForm {
    username: string;
    passwordOne: string;
    passwordTwo: string;
    activationKey: string;
}
export interface ClientWithActivity extends ClientDto {
    isActive: boolean;
    isConnected: boolean;
}
declare class BaseDto {
    id: string;
    createDate: Date;
    updateDate: Date;
}
declare class BaseParentDto extends BaseDto {
    parentId?: string;
}
export declare class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    avatars: number;
    layouts: number;
    buttons: number;
    exp: boolean;
    hp: boolean;
}
export declare class BackgroundDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}
export declare class ButtonStyleDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}
export declare class ClientDto extends BaseDto {
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    tier: TierDto;
    background: BackgroundDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[];
}
export declare class AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}
export declare class LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    buttons: ButtonDto[];
}
export declare class ButtonDto extends BaseParentDto {
    label: string;
    path: string;
    value: string;
    valueAlt: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
}
export declare class ParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueType: ValueType;
}
export declare class FileUploadDto {
    parentType: string;
    parentId: string;
    file: File;
}
export declare class FieldOption {
    key: string;
    value: string;
}
export declare enum ClientTier {
    Basic = "basic",
    Standard = "standard",
    Premium = "premium"
}
export declare enum ParameterRole {
    Exp = "exp",
    HP = "hp"
}
export declare enum ValueType {
    Int = "int",
    Float = "float",
    Boolean = "boolean"
}
export declare enum ButtonType {
    Button = "button",
    Slider = "slider",
    Toggle = "toggle"
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
export {};
