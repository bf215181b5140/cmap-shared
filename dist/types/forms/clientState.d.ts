import { z } from 'zod';
export declare const ClientStateParameterFormSchema: z.ZodEffects<z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
}, {
    value: string;
    path: string;
}>, number | boolean | {
    value: string;
    path: string;
}, {
    value: string;
    path: string;
}>;
export type ClientStateParameterFormDTO = z.infer<typeof ClientStateParameterFormSchema>;
