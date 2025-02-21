import { z } from 'zod';
import { CallbackParameterSchema } from './callbackParameter';
import { parameterValueSimpleSchema } from '../primitives/parameter';

export const UsedParameterButtonSchema = z.object({
  path: z.string(),
  value: parameterValueSimpleSchema,
  callbackParameters: z.array(CallbackParameterSchema),
  exp: z.object({
    path: z.string(),
    value: z.number(),
  }).optional()
});

export type UsedParameterButtonDTO = z.infer<typeof UsedParameterButtonSchema>;
