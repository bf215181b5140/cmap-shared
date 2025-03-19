import { z } from 'zod';
export declare const UsePresetButtonSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type UsePresetButtonDTO = z.infer<typeof UsePresetButtonSchema>;
