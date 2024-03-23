import { BaseParentDTO } from '../shared';
import { ControlParameterDTO } from '../controlParameter';
import { LayoutDTO } from '../layout';
import { TierDTO } from '../tier';
import { ButtonStyleDTO } from '../buttonStyle';
export interface AvatarDTO extends BaseParentDTO<AvatarDTO> {
    vrcId?: string;
    label?: string;
    default?: boolean;
    layouts?: LayoutDTO[];
    controlParameters?: ControlParameterDTO[];
}
export interface AvatarPageDTO {
    avatars: AvatarDTO[];
    tier: TierDTO;
    buttonStyle: ButtonStyleDTO;
}
