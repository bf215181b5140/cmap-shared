import { BaseDTO } from '../shared';
export declare enum TierType {
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium"
}
export interface TierDTO extends BaseDTO<TierDTO> {
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
