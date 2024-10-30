import { z } from 'zod';
import { StyleSchema } from '../../../objects/style';

export const StylesSchema = z.array(StyleSchema.required({
  tier: true,
}));

export type StylesDTO = z.infer<typeof StylesSchema>;
