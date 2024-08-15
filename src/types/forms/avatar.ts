import { BaseNullableIdSchema, IdSchema, vrcAvatarIdSchema } from '../shared';
import { z } from 'zod';

export const AvatarFormSchema = z.object({
    parentId: IdSchema,
    avatars: z.array(BaseNullableIdSchema.extend({
        vrcAvatarId: vrcAvatarIdSchema,
    }))
})

export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;
