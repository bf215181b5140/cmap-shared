import { z } from 'zod';
import { parameterValueSimpleSchema } from '../primitives/parameter';
import { idSchema } from '../primitives/shared';

export const UseCustomPresetSchema = z.object({
  layoutId: idSchema,
  parameters: z.array(parameterValueSimpleSchema).max(50),
});

export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
