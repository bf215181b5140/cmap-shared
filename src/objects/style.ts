import { z } from 'zod';
import { TierSchema } from './tier';
import { IdSchema } from '../shared';

export const StyleSchema = z.object({
  id: IdSchema,
  label: z.string(),
  tier: TierSchema.optional(),
});

export type StyleDTO = z.infer<typeof StyleSchema>;
