import { z } from 'zod';

export const UsedAvatarButtonSchema = z.object({
  value: z.string(),
});

export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
