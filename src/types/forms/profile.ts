import { z } from 'zod';
import { BaseIdSchema, IdSchema } from '../shared';
import { ClientVisibilitySchema } from '../enums/clientVisibility';

export const ProfileFormSchema = BaseIdSchema.extend({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000),
    visibility: ClientVisibilitySchema,
    defaultLayoutId: IdSchema.min(0).nullable(),
    unknownAvatarMessage: z.string().max(1000),
    offlineMessage: z.string().max(1000),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
