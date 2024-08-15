import { z } from 'zod';
import { BaseIdSchema, IdSchema } from '../shared';
import { ClientVisibility, OfflineDisplay, UnknownAvatarDisplay } from '../enums/client';

export const ProfileFormSchema = BaseIdSchema.extend({
    displayName: z.string().min(3).max(32),
    bio: z.string().max(1000).nullable(),
    visibility: z.nativeEnum(ClientVisibility),
    defaultLayoutId: IdSchema.nullable(),
    unknownAvatarDisplay: z.nativeEnum(UnknownAvatarDisplay),
    unknownAvatarMessage: z.string().max(1000).nullable(),
    offlineDisplay: z.nativeEnum(OfflineDisplay),
    offlineMessage: z.string().max(1000).nullable(),
});

export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
