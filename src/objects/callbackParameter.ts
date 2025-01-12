import { z } from 'zod';
import { parameterPathSchema, parameterValueFormSchema, parameterValueSimpleSchema } from '../primitives/parameter';

export const CallbackParameterFormSchema = z.object({
  path: parameterPathSchema,
  value: parameterValueFormSchema,
  seconds: z.number().min(0, 'Minimum delay is 0 seconds').max(20, 'Maximum delay is 20 seconds'),
});

export type CallbackParameterFormDTO = z.infer<typeof CallbackParameterFormSchema>;

export const CallbackParameterSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema,
  seconds: z.number(),
});

export type CallbackParameterDTO = z.infer<typeof CallbackParameterSchema>;
