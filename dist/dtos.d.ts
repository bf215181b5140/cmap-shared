export declare class ClientDto {
    id: string;
    username: string;
    displayName: string;
    bio: string | null;
    picture: string | null;
    hidden: boolean;
    avatars: AvatarDto[];
}
export declare class AvatarDto {
    id: string;
    vrcId: string;
    label: string;
    primary: boolean | null;
    order: number;
    layouts: LayoutDto[];
}
export declare class LayoutDto {
    id: string;
    name: string;
    order: number;
    buttons: ButtonDto[];
}
export declare class ButtonDto {
    id: string;
    label: string;
    path: string;
    value: string;
    valueType: ValueType;
    buttonType: ButtonType;
    image: string | null;
    order: number;
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
