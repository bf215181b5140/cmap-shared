import { z } from 'zod';
export declare const TrackedParameterFormSchema: z.ZodEffects<z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
}, {
    value: string;
    path: string;
}>, {
    value: string | number | boolean;
    path: string;
}, {
    value: string;
    path: string;
}>;
