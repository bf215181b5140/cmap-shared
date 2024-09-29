import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { AccountKeySchema } from '../../objects/accountKey';

export const TiersPageSchema = z.object({
    tiers: z.array(TierSchema),
    clientTier: TierSchema,
    accountKeys: z.array(AccountKeySchema),
});

export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
