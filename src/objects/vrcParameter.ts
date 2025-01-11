import { z } from 'zod';
import { parameterPathSchema, parameterValueObjectOrAvatarSchema } from '../shared';
import { parameterValueOrAvatarSimpleSchema } from '../primitives/parameter';

export const VrcParameterSchema = z.object({
  path: z.string(),
  value: parameterValueOrAvatarSimpleSchema,
});

export type VrcParameter = z.infer<typeof VrcParameterSchema>;