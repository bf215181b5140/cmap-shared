import { z } from 'zod';
export declare const LayoutFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    label: z.ZodString;
    avatars: z.ZodArray<z.ZodString, "many">;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    label: string;
    avatars: string[];
}, {
    id: string | null;
    label: string;
    avatars: string[];
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
