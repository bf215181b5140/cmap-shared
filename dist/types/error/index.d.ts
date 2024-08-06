import { z } from 'zod';
export declare const CmapErrorSchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    id: string;
}, {
    message: string;
    id: string;
}>;
export type CmapErrorDTO = z.infer<typeof CmapErrorSchema>;
