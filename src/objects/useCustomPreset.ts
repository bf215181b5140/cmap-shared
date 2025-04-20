import { z } from 'zod';
import { idSchema } from '../primitives/shared';
import { ParameterSchema } from './parameter';

export const UseCustomPresetSchema = z.object({
  layoutId: idSchema,
  parameters: z.array(ParameterSchema).max(100),
});

export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
