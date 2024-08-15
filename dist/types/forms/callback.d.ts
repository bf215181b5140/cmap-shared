import { z } from 'zod';
export declare const CallbackFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    callbacks: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        label: z.ZodString;
        path: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
        seconds: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }, {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    callbacks: {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[];
}, {
    parentId: string;
    callbacks: {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[];
}>;
export type CallbackFormDTO = z.infer<typeof CallbackFormSchema>;
