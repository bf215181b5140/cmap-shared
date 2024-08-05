import { z } from 'zod';
export declare const CmapErrorSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    message: z.ZodString;
    code: z.ZodNumber;
    date: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: number;
    name: string;
    message: string;
    id: string;
    date: string;
}, {
    code: number;
    name: string;
    message: string;
    id: string;
    date: string;
}>;
export type CmapErrorDTO = z.infer<typeof CmapErrorSchema>;
