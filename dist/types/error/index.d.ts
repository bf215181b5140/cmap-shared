import { z } from 'zod';
export declare const CmapErrorSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    message: string;
    id: string;
}, {
    name: string;
    message: string;
    id: string;
}>;
export type CmapErrorDTO = z.infer<typeof CmapErrorSchema>;
