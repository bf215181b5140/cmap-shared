import { z } from 'zod';
export declare const UsedCustomPresetSchema: z.ZodObject<{
    avatarIds: z.ZodArray<z.ZodString, "many">;
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
    avatarIds: string[];
}, {
    parameters: {
        value: number | boolean;
        path: string;
    }[];
    avatarIds: string[];
}>;
export type UsedCustomPresetDTO = z.infer<typeof UsedCustomPresetSchema>;
