import { z } from 'zod';
import { BaseButtonSchema } from './baseButton';

export const AvatarButtonSchema = BaseButtonSchema.extend({
  avatarId: z.string(),
});

export type AvatarButtonDTO = z.infer<typeof AvatarButtonSchema>;
