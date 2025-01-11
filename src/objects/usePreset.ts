import { z } from 'zod';
import { idSchema } from '../primitives/shared';

export const UsePresetSchema = z.object({
  id: idSchema,
});

export type UsePresetDTO = z.infer<typeof UsePresetSchema>;
