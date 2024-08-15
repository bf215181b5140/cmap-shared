import { BaseIdSchema, vrcAvatarIdSchema } from '../shared';
import { z } from 'zod';

export const AvatarSchema = BaseIdSchema.extend({
    vrcAvatarId: vrcAvatarIdSchema,
});

export type AvatarDTO = z.infer<typeof AvatarSchema>;
