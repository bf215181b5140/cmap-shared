import { z } from 'zod';
export declare const BaseGroupSchema: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    interactionKeyId: string | null;
}, {
    id: string;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    interactionKeyId: string | null;
}>;
export type BaseGroupDTO = z.infer<typeof BaseGroupSchema>;
