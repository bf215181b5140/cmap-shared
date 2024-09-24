import { BaseIdSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { ClientVisibility } from '../enums/client';
import { TierSchema } from './tier';
import { LayoutSchema } from './layout';
import { UploadedFileSchema } from './uploadedFile';
import { InteractionKeySchema } from './interactionKey';

export const ClientSchema = BaseIdSchema.extend({
    username: z.string(),
    displayName: z.string(),
    bio: z.string().nullable(),
    visibility: z.nativeEnum(ClientVisibility),
    defaultLayoutId: IdSchema.min(0).nullable(),
    unknownAvatarMessage: z.string().nullable(),
    offlineMessage: z.string().nullable(),
    image: UploadedFileSchema.nullable().optional(),
    tier: TierSchema.optional(),
    layouts: z.array(LayoutSchema).optional(),
    interactionKeys: z.array(InteractionKeySchema).optional(),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
