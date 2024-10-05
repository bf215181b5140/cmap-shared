import { z } from 'zod';
export declare const ProfileFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    displayName: z.ZodString;
    bio: z.ZodString;
    visibility: z.ZodEnum<["Visible", "Hidden", "Private"]>;
    defaultLayoutId: z.ZodNullable<z.ZodString>;
    unknownAvatarMessage: z.ZodString;
    offlineMessage: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visibility: "Visible" | "Hidden" | "Private";
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
}, {
    id: string;
    visibility: "Visible" | "Hidden" | "Private";
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
}>;
export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
