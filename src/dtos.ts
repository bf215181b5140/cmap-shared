export class ClientDto {
    key: string;
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    lastActivity: Date | null;
    avatars: AvatarDto[];
}

export class AvatarDto {
    key: string;
    vrcId: string;
    label: string;
    primary: boolean | null;
    order: number;
    layouts: LayoutDto[];
}

export class LayoutDto {
    key: string;
    name: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto {
    key: string;
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
