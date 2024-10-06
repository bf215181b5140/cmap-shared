import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { GeneratedInviteKeySchema } from './generateInviteKey/generateInviteKey';

export const TiersPageSchema = z.object({
    tiers: z.array(TierSchema),
    clientTier: TierSchema,
    generatedKeys: z.array(GeneratedInviteKeySchema),
});

export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
