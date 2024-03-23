import { BaseParentDTO } from '../shared';
import { ControlParameterDTO } from '../controlParameter';
import { LayoutDTO } from '../layout';

export class AvatarDTO extends BaseParentDTO<AvatarDTO> {
    vrcId?: string;
    label?: string;
    default?: boolean;
    layouts?: LayoutDTO[];
    controlParameters?: ControlParameterDTO[];
}
