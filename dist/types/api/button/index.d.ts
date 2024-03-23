import { ButtonImageOrientation, ButtonType, ControlParameterDto, UploadedFileDTO, ValueType } from '../../../index';
import { BaseParentDTO } from '../index';
export declare class ButtonDTO extends BaseParentDTO<ButtonDTO> {
    label?: string;
    path?: string;
    value?: string;
    valueAlt?: string;
    valueType?: ValueType;
    buttonType?: ButtonType;
    image?: UploadedFileDTO;
    imageOrientation?: ButtonImageOrientation;
    order?: number;
    useCost?: number;
    controlParameter?: ControlParameterDto | null;
    controlParameterId?: string | null;
}
