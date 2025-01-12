import { z } from 'zod';
export declare const CallbackParameterFormSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
    seconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
    seconds: number;
}, {
    value: string | number | boolean;
    path: string;
    seconds: number;
}>;
export type CallbackParameterFormDTO = z.infer<typeof CallbackParameterFormSchema>;
export declare const CallbackParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    seconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
    seconds: number;
}, {
    value: number | boolean;
    path: string;
    seconds: number;
}>;
export type CallbackParameterDTO = z.infer<typeof CallbackParameterSchema>;
