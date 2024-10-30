import { IdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';

export const InviteKeySchema = z.object({
  id: IdSchema,
  key: z.string(),
  tier: TierSchema.optional(),
});

export type InviteKeyDTO = z.infer<typeof InviteKeySchema>;
