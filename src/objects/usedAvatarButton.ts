import { z } from 'zod';

export const UsedAvatarButtonSchema = z.object({
  vrcAvatarId: z.string(),
});

export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
