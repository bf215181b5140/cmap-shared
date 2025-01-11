import { z } from 'zod';
export declare const UsePresetSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type UsePresetDTO = z.infer<typeof UsePresetSchema>;
