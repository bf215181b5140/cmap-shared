import { z } from 'zod';
import { TierSchema } from '../../objects/tier';
import { InviteKeySchema } from '../../objects/inviteKey';

export const GeneratedInviteKeySchema = InviteKeySchema.required({
  tier: true
}).extend({
  used: z.boolean(),
});

export type GeneratedInviteKeyDTO = z.infer<typeof GeneratedInviteKeySchema>;

export const UseInviteKeyFormSchema = z.object({
  key: z.string().length(16, { message: 'Invalid key' }),
});

export type UseInviteKeyFormDTO = z.infer<typeof UseInviteKeyFormSchema>;

export const TiersPageSchema = z.object({
  tiers: z.array(TierSchema),
  clientTier: TierSchema,
  generatedKeys: z.array(GeneratedInviteKeySchema),
});

export type TiersPageDTO = z.infer<typeof TiersPageSchema>;
