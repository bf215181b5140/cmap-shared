import { BaseIdSchema } from '../shared';
import { z } from 'zod';

export const CallbackSchema = BaseIdSchema.extend({
    label: z.string(),
    path: z.string(),
    value: z.string(),
    seconds: z.number(),
});

export type CallbackDTO = z.infer<typeof CallbackSchema>;
