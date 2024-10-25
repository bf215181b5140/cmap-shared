import { z } from 'zod';
export declare const UpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    version: z.ZodString;
    download: z.ZodString;
    description: z.ZodString;
    date: z.ZodDate;
}>, "strip", z.ZodTypeAny, {
    id: string;
    description: string;
    date: Date;
    version: string;
    download: string;
}, {
    id: string;
    description: string;
    date: Date;
    version: string;
    download: string;
}>;
export type UpdateDTO = z.infer<typeof UpdateSchema>;
