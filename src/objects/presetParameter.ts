import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectSchema } from '../shared';

export const PresetParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueObjectSchema,
});

export type PresetParameterDTO = z.infer<typeof PresetParameterSchema>;