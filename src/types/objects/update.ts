import { BaseIdSchema } from '../shared';
import { z } from 'zod';

export const UpdateSchema = BaseIdSchema.extend({
    version: z.string(),
    download: z.string(),
    description: z.string(),
    date: z.coerce.date(),
});

export type UpdateDTO = z.infer<typeof UpdateSchema>;
