import { z } from 'zod';
import { BaseButtonSchema } from './baseButton';

export const AvatarButtonSchema = BaseButtonSchema.extend({
  vrcAvatarId: z.string(),
});

export type AvatarButtonDTO = z.infer<typeof AvatarButtonSchema>;
