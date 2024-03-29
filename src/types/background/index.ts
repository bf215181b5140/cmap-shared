import { BaseDTO } from '../shared';
import { TierDTO } from '../tier';

export interface BackgroundDTO extends BaseDTO {
    className: string;
    label: string;
    tier: TierDTO;
}
