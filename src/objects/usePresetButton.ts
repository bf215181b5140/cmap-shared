import { z } from 'zod';
import { idSchema } from '../primitives/shared';

export const UsePresetButtonSchema = z.object({
  id: idSchema,
});

export type UsePresetButtonDTO = z.infer<typeof UsePresetButtonSchema>;
