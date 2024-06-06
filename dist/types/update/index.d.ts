import { z } from 'zod';
export declare const UpdateSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    version: z.ZodString;
    download: z.ZodString;
    description: z.ZodString;
    date: z.ZodDate;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    description: string;
    download: string;
    version: string;
    date: Date;
}, {
    id: string | null;
    description: string;
    download: string;
    version: string;
    date: Date;
}>;
export declare const UpdatesFormSchema: z.ZodObject<{
    versions: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        version: z.ZodString;
        download: z.ZodString;
        description: z.ZodString;
        date: z.ZodDate;
    }>, "strip", z.ZodTypeAny, {
        id: string | null;
        description: string;
        download: string;
        version: string;
        date: Date;
    }, {
        id: string | null;
        description: string;
        download: string;
        version: string;
        date: Date;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    versions: {
        id: string | null;
        description: string;
        download: string;
        version: string;
        date: Date;
    }[];
}, {
    versions: {
        id: string | null;
        description: string;
        download: string;
        version: string;
        date: Date;
    }[];
}>;
export type UpdateDTO = z.infer<typeof UpdateSchema>;
export type UpdatesFormDTO = z.infer<typeof UpdatesFormSchema>;
