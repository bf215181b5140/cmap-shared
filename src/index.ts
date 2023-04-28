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

// -- Classes -- //
class BaseDto {
    id: string = null;
    createDate: Date;
    updateDate: Date;
}

class BaseParentDto extends BaseDto {
    parentId?: string;
}

export class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    avatars: number;
    layouts: number;
    buttons: number;
    exp: boolean;
    hp: boolean;
}

export class BackgroundDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}

export class ButtonStyleDto extends BaseDto {
    Label: string;
    className: string;
    tier: TierDto;
}

export class ClientDto extends BaseDto {
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
    path: string = '/avatar/parameters/';
    value: string;
    valueAlt: string;
    valueType: ValueType = ValueType.Int;
    buttonType: ButtonType = ButtonType.Button;
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
    Basic = 'basic',
    Standard = 'standard',
    Premium = 'premium'
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
