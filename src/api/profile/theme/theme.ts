import { z } from 'zod';
import { ThemeSchema } from '../../../objects/theme';

export const ThemesSchema = z.array(ThemeSchema.required({
  tier: true,
}));

export type ThemesDTO = z.infer<typeof ThemesSchema>;
