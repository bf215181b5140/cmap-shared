export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}
declare class BaseDto {
    id: string;
    createDate: Date;
    updateDate: Date;
}
declare class ParentIdDto extends BaseDto {
    parentId?: string;
}
export declare class ClientDto extends BaseDto {
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}
export declare class AvatarDto extends ParentIdDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}
export declare class LayoutDto extends ParentIdDto {
    label: string;
    order: number;
    buttons: ButtonDto[];
}
export declare class ButtonDto extends ParentIdDto {
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
}
export declare class ParameterDto extends ParentIdDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueType: ValueType;
}
export declare class TierDto extends ParentIdDto {
    tier: ClientTier;
    avatars: number;
    layouts: number;
    buttons: number;
}
export declare enum ClientTier {
    Basic = "basic",
    Advance = "advance",
    Premium = "premium",
    Unlocked = "unlocked"
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
export declare class FieldOption {
    key: string;
    value: string;
}
export {};
