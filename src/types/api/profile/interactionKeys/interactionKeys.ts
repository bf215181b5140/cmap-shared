import { z } from 'zod';
import { BaseNullableIdSchema } from '../../../shared';
import { InteractionKeySchema } from '../../../objects/interactionKey';

export const PostInteractionKeysSchema = z.object({
    interactionKeys: z.array(BaseNullableIdSchema.extend({
        label: z.string().min(1).max(32),
        key: z.string().min(1).max(16),
    })),
});

export type PostInteractionKeysDTO = z.infer<typeof PostInteractionKeysSchema>;

export const PostInteractionKeysResultSchema = z.array(InteractionKeySchema);

export type PostInteractionKeysResulDTO = z.infer<typeof PostInteractionKeysResultSchema>;
