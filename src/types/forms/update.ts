import { BaseNullableIdSchema } from '../shared';
import { z } from 'zod';

export const UpdatesFormSchema = z.array(BaseNullableIdSchema.extend({
    version: z.string().min(5).max(16),
    download: z.string().min(1).max(512),
    description: z.string().max(2048),
    date: z.coerce.date(),
}));

export type UpdatesFormDTO = z.infer<typeof UpdatesFormSchema>;

