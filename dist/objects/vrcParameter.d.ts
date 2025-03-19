import { z } from 'zod';
export declare const VrcParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: string | number | boolean;
    path: string;
}, {
    value: string | number | boolean;
    path: string;
}>;
export type VrcParameter = z.infer<typeof VrcParameterSchema>;
