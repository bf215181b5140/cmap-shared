import { z } from 'zod';
import { parameterPathSchema, parameterValueSchema } from '../shared';

export const CallbackParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueSchema,
  seconds: z.number().min(0).max(20),
});

export type CallbackParameterDTO = z.infer<typeof CallbackParameterSchema>;
