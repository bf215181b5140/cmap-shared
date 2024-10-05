import { z } from 'zod';
export declare const ControlParameterFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    controlParameters: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
    controlParameters: {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[];
}, {
    parentId: string;
    controlParameters: {
        id: string | null;
        value: string;
        label: string;
        path: string;
        seconds: number;
    }[];
}>;
export type ControlParameterFormDTO = z.infer<typeof ControlParameterFormSchema>;
