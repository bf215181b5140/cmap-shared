import { BaseIdSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { ClientVisibility, OfflineDisplay, UnknownAvatarDisplay } from '../enums/client';
import { TierSchema } from './tier';
import { LayoutSchema } from './layout';
import { UploadedFileSchema } from './uploadedFile';
import { InteractionKeySchema } from './interactionKey';

export const ClientSchema = BaseIdSchema.extend({
    username: z.string(),
    displayName: z.string(),
    bio: z.string(),
    visibility: z.nativeEnum(ClientVisibility),
    defaultLayoutId: IdSchema.nullable(),
    unknownAvatarDisplay: z.nativeEnum(UnknownAvatarDisplay),
    unknownAvatarMessage: z.string().nullable(),
    offlineDisplay: z.nativeEnum(OfflineDisplay),
    offlineMessage: z.string().nullable(),
    image: UploadedFileSchema.nullable().optional(),
    tier: TierSchema.optional(),
    layouts: z.array(LayoutSchema).optional(),
    interactionKeys: z.array(InteractionKeySchema).optional(),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
