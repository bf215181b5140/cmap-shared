export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}

class BaseDto {
    id: string = null;
    createDate: Date;
    updateDate: Date;
}

class ParentIdDto extends BaseDto {
    parentId?: string;
}

export class ClientDto extends BaseDto {
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}

export class AvatarDto extends ParentIdDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}

export class LayoutDto extends ParentIdDto {
    label: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto extends ParentIdDto {
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
}

export class ParameterDto extends ParentIdDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueType: ValueType;
}

export class TierDto extends ParentIdDto {
    tier: ClientTier;
    avatars: number;
    layouts: number;
    buttons: number;
}

export enum ClientTier {
    Basic = 'basic',
    Advance = 'advance',
    Premium = 'premium',
    Unlocked = 'unlocked',
}

export enum ParameterRole {
    Exp = 'exp',
    HP = 'hp',
}

export enum ValueType {
    Int = 'int',
    Float = 'float',
    Boolean = 'boolean',
}

export enum ButtonType {
    Button = 'button',
    Slider = 'slider',
    Toggle = 'toggle',
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

export class FieldOption {
    key: string;
    value: string;
}
