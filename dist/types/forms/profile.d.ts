import { z } from 'zod';
import { ClientVisibility } from '../enums/client';
export declare const ProfileFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    displayName: z.ZodString;
    bio: z.ZodNullable<z.ZodString>;
    visibility: z.ZodNativeEnum<typeof ClientVisibility>;
    defaultLayoutId: z.ZodNullable<z.ZodString>;
    unknownAvatarMessage: z.ZodNullable<z.ZodString>;
    offlineMessage: z.ZodNullable<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visibility: ClientVisibility;
    displayName: string;
    bio: string | null;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string | null;
    offlineMessage: string | null;
}, {
    id: string;
    visibility: ClientVisibility;
    displayName: string;
    bio: string | null;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string | null;
    offlineMessage: string | null;
}>;
export type ProfileFormDTO = z.infer<typeof ProfileFormSchema>;
