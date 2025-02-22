import { z } from 'zod';
import { BaseGroupSchema } from './baseGroup';
import { AvatarButtonSchema } from './avatarButton';

export const AvatarGroupSchema = BaseGroupSchema.extend({
  avatarButtons: z.array(AvatarButtonSchema).optional(),
});

export type AvatarGroupDTO = z.infer<typeof AvatarGroupSchema>;
