import { z } from 'zod';
export declare const UpdateSchema: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodString;
    download: z.ZodString;
    description: z.ZodString;
    date: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    version: string;
    download: string;
    date: Date;
}, {
    id: string;
    description: string;
    version: string;
    download: string;
    date: Date;
}>;
export type UpdateDTO = z.infer<typeof UpdateSchema>;
