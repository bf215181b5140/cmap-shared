import { z } from 'zod';
import { parameterValueSimpleSchema } from '../primitives/parameter';

export const ParameterSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema,
});

export type ParameterDTO = z.infer<typeof ParameterSchema>;