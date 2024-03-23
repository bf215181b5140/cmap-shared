import { z } from 'zod';
export declare const AvatarFormSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    vrcId: z.ZodString;
    label: z.ZodString;
    default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    default: boolean;
    id: string | null;
    label: string;
    vrcId: string;
}, {
    default: boolean;
    id: string | null;
    label: string;
    vrcId: string;
}>;
export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;
