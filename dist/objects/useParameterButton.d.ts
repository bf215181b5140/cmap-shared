import { z } from 'zod';
export declare const UseParameterButtonSchema: z.ZodObject<{
    id: z.ZodString;
    value: z.ZodUnion<[z.ZodEffects<z.ZodNumber, number, number>, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    value: number | boolean;
}, {
    id: string;
    value: number | boolean;
}>;
export type UseParameterButtonDTO = z.infer<typeof UseParameterButtonSchema>;
