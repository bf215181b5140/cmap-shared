import { BaseDTO } from '../shared';

export enum TierType {
    Basic = 'Basic',
    Standard = 'Standard',
    Premium = 'Premium'
}

export class TierDTO extends BaseDTO<TierDTO> {
    tier?: TierType;
    rank?: number;
    color?: string;
    avatars?: number;
    layouts?: number;
    buttons?: number;
    controlParameters?: number;
    useCost?: boolean;
    hp?: boolean;
}
