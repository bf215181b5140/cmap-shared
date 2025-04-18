import { z } from 'zod';
export declare const UsedCustomPresetSchema: z.ZodObject<{
    avatarIds: z.ZodArray<z.ZodString, "many">;
    parameters: z.ZodArray<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, "many">;
}, "strip", z.ZodTypeAny, {
    parameters: (number | boolean)[];
    avatarIds: string[];
}, {
    parameters: (number | boolean)[];
    avatarIds: string[];
}>;
export type UsedCustomPresetDTO = z.infer<typeof UsedCustomPresetSchema>;
