import { z } from 'zod';
export declare const UpdatesFormSchema: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    version: z.ZodString;
    download: z.ZodString;
    description: z.ZodString;
    date: z.ZodDate;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    description: string;
    date: Date;
    version: string;
    download: string;
}, {
    id: string | null;
    description: string;
    date: Date;
    version: string;
    download: string;
}>, "many">;
export type UpdatesFormDTO = z.infer<typeof UpdatesFormSchema>;
