import { z } from 'zod';
import { BackgroundSchema } from '../../../objects/background';

export const BackgroundsSchema = z.array(BackgroundSchema.required({
  tier: true,
}));

export type BackgroundsDTO = z.infer<typeof BackgroundsSchema>;
