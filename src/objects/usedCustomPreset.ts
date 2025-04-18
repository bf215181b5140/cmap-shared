import { z } from 'zod';
import { parameterValueAvatarIdSchema, parameterValueSimpleSchema } from '../primitives/parameter';

export const UsedCustomPresetSchema = z.object({
  avatarId: parameterValueAvatarIdSchema,
  parameters: z.array(parameterValueSimpleSchema).max(50),
});

export type UsedCustomPresetDTO = z.infer<typeof UsedCustomPresetSchema>;
