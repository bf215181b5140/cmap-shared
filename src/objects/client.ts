import { BaseIdSchema, IdSchema } from '../shared';
import { z } from 'zod';
import { TierSchema } from './tier';
import { LayoutSchema } from './layout';
import { UploadedFileSchema } from './uploadedFile';
import { InteractionKeySchema } from './interactionKey';
import { BackgroundSchema } from './background';
import { StyleSchema } from './style';
import { ClientVisibilitySchema } from '../enums/clientVisibility';

export const ClientSchema = BaseIdSchema.extend({
    username: z.string(),
    displayName: z.string(),
    bio: z.string(),
    visibility: ClientVisibilitySchema,
    defaultLayoutId: IdSchema.min(0).nullable(),
    unknownAvatarMessage: z.string(),
    offlineMessage: z.string(),
    image: UploadedFileSchema.nullable().optional(),
    tier: TierSchema.optional(),
    background: BackgroundSchema.optional(),
    style: StyleSchema.optional(),
    layouts: z.array(LayoutSchema).optional(),
    interactionKeys: z.array(InteractionKeySchema).optional(),
});

export type ClientDTO = z.infer<typeof ClientSchema>;
