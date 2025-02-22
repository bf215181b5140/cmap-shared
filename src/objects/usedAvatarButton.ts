import { z } from 'zod';
import { parameterValueSimpleSchema } from '../primitives/parameter';

export const UsedAvatarButtonSchema = z.object({
  value: parameterValueSimpleSchema,
});

export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
