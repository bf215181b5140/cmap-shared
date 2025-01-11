import { z } from 'zod';
export declare const PresetParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodString, number | boolean, string>, z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
}, {
    value: string | number | boolean;
    path: string;
}>;
export type PresetParameterDTO = z.infer<typeof PresetParameterSchema>;
