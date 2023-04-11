// -- Interfaces -- //
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

// -- Classes -- //
class BaseDto {
    id: string = null;
    createDate: Date;
    updateDate: Date;
}

class BaseParentDto extends BaseDto {
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

export class AvatarDto extends BaseParentDto {
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}

export class LayoutDto extends BaseParentDto {
    label: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto extends BaseParentDto {
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
}

export class ParameterDto extends BaseParentDto {
    label: string;
    role: ParameterRole;
    path: string;
    value: string;
    valueType: ValueType;
}

export class TierDto extends BaseDto {
    tier: ClientTier;
    avatars: number = 0;
    layouts: number = 0;
    buttons: number = 0;
    exp: boolean = false;
    hp: boolean = false;
}

export class FieldOption {
    key: string;
    value: string;
}

// -- Enums -- //
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
