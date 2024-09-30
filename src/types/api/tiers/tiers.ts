import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { GeneratedAccountKeySchema } from './generateAccountKey/generateAccountKey';

export const TiersPageSchema = z.object({
    tiers: z.array(TierSchema),
    clientTier: TierSchema,
    generatedKeys: z.array(GeneratedAccountKeySchema),
});

export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
