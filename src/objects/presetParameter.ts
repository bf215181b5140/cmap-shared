import { z } from 'zod';
import { parameterPathSchema, parameterValueFormSchema } from '../primitives/parameter';

export const PresetParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema
});

export type PresetParameterDTO = z.infer<typeof PresetParameterSchema>;