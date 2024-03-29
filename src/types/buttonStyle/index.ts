import { BaseDTO } from '../shared';
import { TierDTO } from '../tier';

export interface ButtonStyleDTO extends BaseDTO {
    className: string;
    label: string;
    tier: TierDTO;
}
