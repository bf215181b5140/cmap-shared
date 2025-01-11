import { z } from 'zod';
import { CallbackParameterSchema } from './callbackParameter';
import { parameterValueSimpleSchema } from '../primitives/parameter';

export const UsedButtonSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema,
  callbackParameters: z.array(CallbackParameterSchema),
  exp: z.object({
    path: z.string(),
    value: z.number(),
  }).optional()
});

export type UsedButtonDTO = z.infer<typeof UsedButtonSchema>;
