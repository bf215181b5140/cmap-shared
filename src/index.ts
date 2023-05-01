// -- Interfaces -- //
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

// -- Classes -- //
class BaseDto {
    id: string | undefined | null;
    createDate: Date | undefined | null;
    updateDate: Date | undefined | null;
}

class BaseParentDto extends BaseDto {
    parentId: string | undefined | null;
}

export class TierDto extends BaseDto {
    rank: number;
    tier: ClientTier;
    color: string;
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
    displayName: string | undefined | null;
    bio: string | undefined | null;
    picture: string;
    hidden: boolean;
    tier: TierDto;
    background: BackgroundDto;
    buttonStyle: ButtonStyleDto;
    avatars: AvatarDto[] | undefined | null;
}

export class AvatarDto extends BaseParentDto {
    vrcId: string | undefined | null;
    label: string | undefined | null;
    default: boolean | undefined | null;
    layouts: LayoutDto[] | undefined | null;
}

export class LayoutDto extends BaseParentDto {
    label: string | undefined | null;
    order: number | undefined | null;
    buttons: ButtonDto[] | undefined | null;
}

export class ButtonDto extends BaseParentDto {
    label: string | undefined | null;
    path: string | undefined | null = '/avatar/parameters/';
    value: string | undefined | null;
    valueAlt: string | undefined | null;
    valueType: ValueType | undefined | null = ValueType.Int;
    buttonType: ButtonType | undefined | null = ButtonType.Button;
    image: string | undefined | null;
    order: number | undefined | null;
}

export class ParameterDto extends BaseParentDto {
    label: string | undefined | null;
    role: ParameterRole | undefined | null;
    path: string | undefined | null;
    value: string | undefined | null;
    valueType: ValueType | undefined | null;
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
