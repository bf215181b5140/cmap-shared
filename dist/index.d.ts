export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
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
export interface Tiers {
    tiers: TierDto[];
    clientTier: TierDto;
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
    parentId?: string | undefined | null;
}
export declare class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    color: string;
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
    displayName: string | undefined | null;
    bio: string | undefined | null;
    picture: string;
    hidden: boolean;
    tier: TierDto;
    background: BackgroundDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[] | undefined | null;
}
export declare class AvatarDto extends BaseParentDto {
    vrcId: string | undefined | null;
    label: string | undefined | null;
    default: boolean;
    layouts: LayoutDto[] | undefined | null;
}
export declare class LayoutDto extends BaseParentDto {
    label: string | undefined | null;
    order: number | undefined | null;
    buttons: ButtonDto[] | undefined | null;
}
export declare class ButtonDto extends BaseParentDto {
    label: string | undefined | null;
    path: string | undefined | null;
    value: string | undefined | null;
    valueAlt: string | undefined | null;
    valueType: ValueType | undefined | null;
    buttonType: ButtonType | undefined | null;
    image: string | undefined | null;
    order: number | undefined | null;
}
export declare class ParameterDto extends BaseParentDto {
    label: string | undefined | null;
    role: ParameterRole | undefined | null;
    path: string | undefined | null;
    value: string | undefined | null;
    valueType: ValueType | undefined | null;
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
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium"
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
