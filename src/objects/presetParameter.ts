import { z } from 'zod';
import { parameterPathSchema, parameterValueFormSchema, parameterValueSimpleSchema } from '../primitives/parameter';

export const PresetParameterFormSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema
});

export type PresetParameterFormDTO = z.infer<typeof PresetParameterFormSchema>;

export const PresetParameterSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema
});

export type PresetParameterDTO = z.infer<typeof PresetParameterSchema>;