import { z } from 'zod';
import { BaseNullableIdSchema, IdSchema } from '../shared';

export const InteractionKeyFormSchema = z.object({
    parentId: IdSchema,
    interactionKeys: z.array(BaseNullableIdSchema.extend({
        label: z.string().max(32),
        key: z.string().max(16),
    })),
});

export type InteractionKeyFormDTO = z.infer<typeof InteractionKeyFormSchema>;
