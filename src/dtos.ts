export class ClientDto {
    id: string;
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}

export class AvatarDto {
    id: string;
    vrcId: string;
    label: string;
    primary: boolean | null;
    order: number;
    layouts: LayoutDto[];
}

export class LayoutDto {
    id: string;
    label: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto {
    id: string;
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
