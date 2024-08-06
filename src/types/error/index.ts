import { z } from 'zod';

export const CmapErrorSchema = z.object({
    id: z.string(),
    message: z.string(),
});

export type CmapErrorDTO = z.infer<typeof CmapErrorSchema>;
