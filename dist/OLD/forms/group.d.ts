import { z } from 'zod';
export declare const GroupFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, {
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
    visibilityParameters: z.ZodArray<z.ZodString, "many">;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    parentId: string;
    visibilityParameters: string[];
    interactionKeyId: string | null;
}, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    parentId: string;
    visibilityParameters: string[];
    interactionKeyId: string | null;
}>;
export type GroupFormDTO = z.infer<typeof GroupFormSchema>;
