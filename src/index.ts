export interface OscMessage {
    oscType: string;
    address: string;
    args: [boolean | number | string];
}

export class ParentId {
    parentId?: string;
}

export class ClientDto {
    id: string;
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}

export class AvatarDto extends ParentId {
    id: string = null;
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}

export class LayoutDto extends ParentId {
    id: string = null;
    label: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto extends ParentId {
    id: string = null;
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
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
