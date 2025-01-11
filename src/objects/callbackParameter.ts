import { z } from 'zod';
import { parameterPathSchema, parameterValueFormSchema } from '../primitives/parameter';

export const CallbackParameterSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  seconds: z.number().min(0, 'Minimum delay is 0 seconds').max(20, 'Maximum delay is 20 seconds'),
});

export type CallbackParameterDTO = z.infer<typeof CallbackParameterSchema>;
