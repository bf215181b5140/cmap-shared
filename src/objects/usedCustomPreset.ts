import { z } from 'zod';
import { ParameterSchema } from './parameter';

export const UsedCustomPresetSchema = z.object({
  avatarIds: z.array(z.string()),
  parameters: z.array(ParameterSchema).max(50),
});

export type UsedCustomPresetDTO = z.infer<typeof UsedCustomPresetSchema>;
