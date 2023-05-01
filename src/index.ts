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
    rank: number | undefined | null;
    tier: ClientTier | undefined | null;
    color: string | undefined | null;
    avatars: number | undefined | null;
    layouts: number | undefined | null;
    buttons: number | undefined | null;
    exp: boolean | undefined | null;
    hp: boolean | undefined | null;
}

export class BackgroundDto extends BaseDto {
    Label: string | undefined | null;
    className: string | undefined | null;
    tier: TierDto | undefined | null;
}

export class ButtonStyleDto extends BaseDto {
    Label: string | undefined | null;
    className: string | undefined | null;
    tier: TierDto | undefined | null;
}

export class ClientDto extends BaseDto {
    username: string | undefined | null;
    displayName: string | undefined | null;
    bio: string | undefined | null;
    picture: string | undefined | null;
    hidden: boolean | undefined | null;
    tier: TierDto | undefined | null;
    background: BackgroundDto | undefined | null;
    buttonStyle: ButtonStyleDto | undefined | null;
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
    parentType: string | undefined | null;
    parentId: string | undefined | null;
    file: File | undefined | null;
}

export class FieldOption {
    key: string | undefined | null;
    value: string | undefined | null;
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
