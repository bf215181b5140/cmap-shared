import { z } from 'zod';
import { TierSchema } from './tier';

export const BackgroundSchema = z.object({
    id: z.string(),
    label: z.string(),
    tier: TierSchema.optional(),
});

export type BackgroundDTO = z.infer<typeof BackgroundSchema>;
