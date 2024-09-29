import { z } from 'zod';
import { BaseNullableIdSchema } from '../../../shared';

export const InteractionKeysFormSchema = z.object({
    interactionKeys: z.array(BaseNullableIdSchema.extend({
        label: z.string().min(1).max(32),
        key: z.string().min(1).max(16),
    })),
});

export type InteractionKeysFormDTO = z.infer<typeof InteractionKeysFormSchema>;
