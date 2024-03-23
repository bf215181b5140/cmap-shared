import { BaseParentDTO } from '../shared';
import { ButtonDTO } from '../button';
import { ContentBoxWidth } from '../../../index';
export interface LayoutDTO extends BaseParentDTO<LayoutDTO> {
    label?: string;
    order?: number;
    width?: ContentBoxWidth;
    buttons?: ButtonDTO[];
}
