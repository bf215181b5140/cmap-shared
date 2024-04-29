import { BaseIdSchema } from '../shared';
import { z } from 'zod';


export const UpdateSchema = BaseIdSchema.extend({
    version: z.string().min(5).max(16),
    download: z.string().min(1).max(512),
    description: z.string().max(2048),
    date: z.coerce.date(),
});

export const UpdatesFormSchema = z.object({
    versions: z.array(UpdateSchema),
});

export const UpdateClientInfoSchema = z.object({
    version: z.string().min(5).max(16),
    username: z.string().max(16).optional(),
});

export type UpdateDTO = z.infer<typeof UpdateSchema>;

export type UpdatesFormDTO = z.infer<typeof UpdatesFormSchema>;

export type UpdateClientInfoDTO = z.infer<typeof UpdateClientInfoSchema>;
