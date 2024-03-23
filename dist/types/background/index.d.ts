import { BaseDTO } from '../shared';
import { TierDTO } from '../tier';
export interface BackgroundDTO extends BaseDTO<BackgroundDTO> {
    className?: string;
    Label?: string;
    tier?: TierDTO;
}
