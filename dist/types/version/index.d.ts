import { z } from 'zod';
export declare const ClientVersionSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    version: z.ZodString;
    download: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    download: string;
    version: string;
}, {
    id: string | null;
    download: string;
    version: string;
}>;
export declare const ClientVersionFormSchema: z.ZodObject<{
    versions: z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodString>;
        version: z.ZodString;
        download: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string | null;
        download: string;
        version: string;
    }, {
        id: string | null;
        download: string;
        version: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    versions: {
        id: string | null;
        download: string;
        version: string;
    }[];
}, {
    versions: {
        id: string | null;
        download: string;
        version: string;
    }[];
}>;
export type ClientVersionFormDTO = z.infer<typeof ClientVersionFormSchema>;
export type ClientVersionDTO = z.infer<typeof ClientVersionSchema> & {
    serverVersion: string;
};
