import { z } from 'zod';
export declare const CallbackParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
    seconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: string;
    path: string;
    seconds: number;
}, {
    value: string;
    path: string;
    seconds: number;
}>;
export type CallbackParameterDTO = z.infer<typeof CallbackParameterSchema>;
