import { z } from 'zod';
import { parameterValueAvatarIdSchema, parameterValueSimpleSchema } from '../primitives/parameter';

export const UseCustomPresetSchema = z.object({
  avatarId: parameterValueAvatarIdSchema,
  parameters: z.array(parameterValueSimpleSchema).max(50),
});

export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
