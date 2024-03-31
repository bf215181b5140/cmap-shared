import { BaseIdSchema } from '../shared';
import { z } from 'zod';


export const ClientVersionSchema = BaseIdSchema.extend({
    version: z.string().min(5).max(16),
    download: z.string().min(1).max(512),
});

export const ClientVersionFormSchema = z.object({
    versions: z.array(ClientVersionSchema),
});

export type ClientVersionFormDTO = z.infer<typeof ClientVersionFormSchema>;

export type ClientVersionDTO = z.infer<typeof ClientVersionSchema> & {
    serverVersion: string;
};

