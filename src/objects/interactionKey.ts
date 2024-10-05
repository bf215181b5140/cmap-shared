import { BaseIdSchema } from '../shared';
import { z } from 'zod';

export const InteractionKeySchema = BaseIdSchema.extend({
    label: z.string(),
    key: z.string(),
});

export type InteractionKeyDTO = z.infer<typeof InteractionKeySchema>;
