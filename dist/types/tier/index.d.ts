import { BaseDTO } from '../shared';
export declare enum TierType {
    Basic = "Basic",
    Standard = "Standard",
    Premium = "Premium"
}
export interface TiersDTO {
    tiers: TierDTO[];
    clientTier: TierDTO;
}
export interface TierDTO extends BaseDTO {
    tier: TierType;
    rank: number;
    color: string;
    avatars: number;
    layouts: number;
    buttons: number;
    controlParameters: number;
    useCost: boolean;
    hp: boolean;
}
