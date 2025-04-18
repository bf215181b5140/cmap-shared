import { z } from 'zod';
export declare const UseCustomPresetSchema: z.ZodObject<{
    avatarId: z.ZodString;
    parameters: z.ZodArray<z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>, "many">;
}, "strip", z.ZodTypeAny, {
    parameters: (number | boolean)[];
    avatarId: string;
}, {
    parameters: (number | boolean)[];
    avatarId: string;
}>;
export type UseCustomPresetDTO = z.infer<typeof UseCustomPresetSchema>;
