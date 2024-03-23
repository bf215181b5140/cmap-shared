import { TierDTO } from '../tier';
import { BaseDTO } from '../shared';

export class ButtonStyleDTO extends BaseDTO<ButtonStyleDTO> {
    className?: string;
    label?: string;
    tier?: TierDTO;
}
