import { z } from 'zod';
export declare const CustomPresetsFormSchema: z.ZodObject<{
    id: z.ZodString;
    customPresetsEnabled: z.ZodBoolean;
    customPresetsWhitelist: z.ZodArray<z.ZodString, "many">;
    customPresetsBlacklist: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    customPresetsEnabled: boolean;
    customPresetsWhitelist: string[];
    customPresetsBlacklist: string[];
}, {
    id: string;
    customPresetsEnabled: boolean;
    customPresetsWhitelist: string[];
    customPresetsBlacklist: string[];
}>;
export type CustomPresetsFormDTO = z.infer<typeof CustomPresetsFormSchema>;
