import { BaseDTO } from '../shared';
import { TierDTO } from '../tier';

export class BackgroundDTO extends BaseDTO<BackgroundDTO>{
    className?: string;
    Label?: string;
    tier?: TierDTO;
}
