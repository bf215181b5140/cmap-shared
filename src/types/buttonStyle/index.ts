import { BaseDTO } from '../shared';
import { TierDTO } from '../tier';

export interface ButtonStyleDTO extends BaseDTO<ButtonStyleDTO> {
    className?: string;
    label?: string;
    tier?: TierDTO;
}
