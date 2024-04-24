import { BaseDTO } from '../shared';

export enum TierType {
    Basic = 'Basic',
    Standard = 'Standard',
    Premium = 'Premium'
}

export interface TiersDTO {
    tiers: TierDTO[];
    clientTier: TierDTO;
}

export interface TierDTO extends BaseDTO {
    tier: TierType;
    rank: number;
    color: string;
    interactionKeys: number;
    avatars: number;
    layouts: number;
    buttons: number;
    controlParameters: number;
    stateBadges: number;
    useCost: boolean;
    hp: boolean;
}
