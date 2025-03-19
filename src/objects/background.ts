import { z } from 'zod';
import { TierSchema } from './tier';
import { IdSchema } from '../shared';

export const BackgroundSchema = z.object({
  id: IdSchema,
  label: z.string(),
  tier: TierSchema.optional(),
});

export type BackgroundDTO = z.infer<typeof BackgroundSchema>;
