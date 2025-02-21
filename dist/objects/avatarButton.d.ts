import { z } from 'zod';
export declare const AvatarButtonSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
    label: z.ZodString;
    order: z.ZodNumber;
    imageOrientation: z.ZodEnum<["Horizontal", "Square", "Vertical"]>;
    image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        fileName: z.ZodString;
        urlPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        fileName: string;
        urlPath: string;
    }, {
        id: string;
        fileName: string;
        urlPath: string;
    }>>>;
    interactionKeyId: z.ZodNullable<z.ZodString>;
}, {
    avatarId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    interactionKeyId: string | null;
    avatarId: string;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}, {
    id: string;
    imageOrientation: "Horizontal" | "Square" | "Vertical";
    order: number;
    label: string;
    interactionKeyId: string | null;
    avatarId: string;
    image?: {
        id: string;
        fileName: string;
        urlPath: string;
    } | null | undefined;
}>;
export type AvatarButtonDTO = z.infer<typeof AvatarButtonSchema>;
