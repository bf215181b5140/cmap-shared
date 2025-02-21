import { z } from 'zod';
export declare const AvatarButtonFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    label: z.ZodString;
    vrcAvatarId: z.ZodString;
    order: z.ZodNumber;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    interactionKeyId: string | null;
    vrcAvatarId: string;
}, {
    id: string | null;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    interactionKeyId: string | null;
    vrcAvatarId: string;
}>;
export type AvatarButtonFormDTO = z.infer<typeof AvatarButtonFormSchema>;
