import { z } from 'zod';
import { TierSchema } from './tier';

export const StyleSchema = z.object({
    id: z.string(),
    label: z.string(),
    tier: TierSchema.optional(),
});

export type StyleDTO = z.infer<typeof StyleSchema>;
