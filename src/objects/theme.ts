import { z } from 'zod';
import { TierSchema } from './tier';
import { IdSchema } from '../shared';

export const ThemeSchema = z.object({
  id: IdSchema,
  label: z.string(),
  tier: TierSchema.optional(),
});

export type ThemeDTO = z.infer<typeof ThemeSchema>;
