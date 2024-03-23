import { ControlParameterDTO } from '../controlParameter';
import { BaseParentDTO, ParameterValueType } from '../shared';
import { UploadedFileDTO } from '../files';
export declare enum ButtonType {
    Button = "Button",
    Slider = "Slider",
    Toggle = "Toggle"
}
export declare enum ButtonImageOrientation {
    Horizontal = "Horizontal",
    Vertical = "Vertical",
    Square = "Square"
}
export interface ButtonDTO extends BaseParentDTO<ButtonDTO> {
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ParameterValueType;
    buttonType?: ButtonType;
    image?: UploadedFileDTO;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    controlParameter?: ControlParameterDTO | null;
    controlParameterId?: string | null;
}
