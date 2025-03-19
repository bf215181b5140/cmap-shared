import { z } from 'zod';
import { idSchema } from '../primitives/shared';

export const UseAvatarButtonSchema = z.object({
  id: idSchema,
});

export type UseAvatarButtonDTO = z.infer<typeof UseAvatarButtonSchema>;
