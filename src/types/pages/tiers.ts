import { z } from 'zod';
import { TierSchema } from '../objects/tier';
import { RegistrationKeySchema } from '../objects/registrationKey';

export const TiersPageSchema = z.object({
    tiers: z.array(TierSchema),
    clientTier: TierSchema,
    registrationKeys: z.array(RegistrationKeySchema),
});

export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
