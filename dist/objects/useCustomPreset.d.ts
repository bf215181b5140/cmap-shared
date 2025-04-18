import { z } from 'zod';
export declare const UseCustomPresetSchema: z.ZodObject<{
    layoutId: z.ZodString;
    parameters: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
    }, "strip", z.ZodTypeAny, {
        value: number | boolean;
        path: string;
    }, {
        value: number | boolean;
        path: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    layoutId: string;
}, {
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    layoutId: string;
}>;
export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
