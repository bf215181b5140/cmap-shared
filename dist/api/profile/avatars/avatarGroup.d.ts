import { z } from 'zod';
export declare const AvatarGroupFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    order: z.ZodNumber;
    width: z.ZodEnum<["None", "Third", "Half", "Full"]>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    interactionKeyId: string | null;
}, {
    id: string | null;
    width: "None" | "Third" | "Half" | "Full";
    order: number;
    label: string;
    interactionKeyId: string | null;
}>;
export type AvatarGroupFormDTO = z.infer<typeof AvatarGroupFormSchema>;
export declare const AvatarGroupCopySchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type AvatarGroupCopyDTO = z.infer<typeof AvatarGroupCopySchema>;
