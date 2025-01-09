import { z } from 'zod';
export declare const PresetParameterSchema: z.ZodObject<{
    path: z.ZodString;
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
    path: string;
}, {
    value: number | boolean;
    path: string;
}>;
export type PresetParameterDTO = z.infer<typeof PresetParameterSchema>;
