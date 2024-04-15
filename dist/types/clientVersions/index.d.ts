import { z } from 'zod';
export declare const ClientVersionSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    version: z.ZodString;
    download: z.ZodString;
    description: z.ZodString;
    date: z.ZodDate;
}, "strip", z.ZodTypeAny, {
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
export declare const ClientVersionFormSchema: z.ZodObject<{
    versions: z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        download: z.ZodString;
        description: z.ZodString;
        date: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
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
export type ClientVersionFormDTO = z.infer<typeof ClientVersionFormSchema>;
export type ClientVersionDTO = z.infer<typeof ClientVersionSchema>;
