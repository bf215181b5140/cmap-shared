import { z } from 'zod';

export const CmapErrorSchema = z.object({
    id: z.string(),
    name: z.string(),
    message: z.string(),
    code: z.number(),
    date: z.string().datetime(),
});

export type CmapErrorDTO = z.infer<typeof CmapErrorSchema>;
