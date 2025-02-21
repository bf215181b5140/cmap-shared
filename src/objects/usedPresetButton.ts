import { z } from 'zod';
import { CallbackParameterSchema } from './callbackParameter';
import { ParameterSchema } from './parameter';

export const UsedPresetButtonSchema = z.object({
  parameters: z.array(ParameterSchema),
  callbackParameters: z.array(CallbackParameterSchema),
  exp: z.object({
    path: z.string(),
    value: z.number(),
  }).optional()
});

export type UsedPresetButtonDTO = z.infer<typeof UsedPresetButtonSchema>;
