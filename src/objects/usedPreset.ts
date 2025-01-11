import { z } from 'zod';
import { CallbackParameterSchema } from './callbackParameter';
import { ParameterSchema } from './parameter';

export const UsedPresetSchema = z.object({
  parameters: z.array(ParameterSchema),
  callbackParameters: z.array(CallbackParameterSchema),
  exp: z.object({
    path: z.string(),
    value: z.number(),
  }).optional()
});

export type UsedPresetDTO = z.infer<typeof UsedPresetSchema>;
