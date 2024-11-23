import { z } from 'zod';
export declare const BasicInfoFormSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    visibility: z.ZodEnum<["Visible", "Hidden", "Private"]>;
    defaultLayoutId: z.ZodString;
    unknownAvatarMessage: z.ZodString;
    offlineMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    visibility: "Visible" | "Hidden" | "Private";
    displayName: string;
    bio: string;
    defaultLayoutId: string;
    unknownAvatarMessage: string;
    offlineMessage: string;
}, {
    visibility: "Visible" | "Hidden" | "Private";
    displayName: string;
    bio: string;
    defaultLayoutId: string;
    unknownAvatarMessage: string;
    offlineMessage: string;
}>;
export type BasicInfoFormDTO = z.infer<typeof BasicInfoFormSchema>;
