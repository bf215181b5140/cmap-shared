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
    id: string;
    vrcId: string;
    label: string;
    default: boolean;
    layouts: LayoutDto[];
}

export class LayoutDto extends ParentId {
    id: string;
    label: string;
    order: number;
    buttons: ButtonDto[];
}

export class ButtonDto extends ParentId {
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
