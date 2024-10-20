import { z } from 'zod';
export declare const LayoutFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    avatars: z.ZodArray<z.ZodString, "many">;
    healthEnabled: z.ZodBoolean;
    healthPath: z.ZodNullable<z.ZodString>;
    healthMax: z.ZodNullable<z.ZodNumber>;
    useCostEnabled: z.ZodBoolean;
    useCostPath: z.ZodNullable<z.ZodString>;
    useCostMax: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    label: string;
    avatars: string[];
    healthEnabled: boolean;
    healthPath: string | null;
    healthMax: number | null;
    useCostEnabled: boolean;
    useCostPath: string | null;
    useCostMax: number | null;
}, {
    id: string | null;
    label: string;
    avatars: string[];
    healthEnabled: boolean;
    healthPath: string | null;
    healthMax: number | null;
    useCostEnabled: boolean;
    useCostPath: string | null;
    useCostMax: number | null;
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
