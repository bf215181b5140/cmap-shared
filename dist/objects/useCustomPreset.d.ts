import { z } from 'zod';
export declare const UseCustomPresetSchema: z.ZodObject<{
    layoutId: z.ZodString;
    parameters: z.ZodArray<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, "many">;
}, "strip", z.ZodTypeAny, {
    parameters: (number | boolean)[];
    layoutId: string;
}, {
    parameters: (number | boolean)[];
    layoutId: string;
}>;
export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
