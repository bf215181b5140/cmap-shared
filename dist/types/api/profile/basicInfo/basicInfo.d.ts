import { z } from 'zod';
import { ClientVisibility } from '../../../enums/client';
export declare const BasicInfoFormSchema: z.ZodObject<{
    displayName: z.ZodString;
    bio: z.ZodString;
    visibility: z.ZodNativeEnum<typeof ClientVisibility>;
    defaultLayoutId: z.ZodNullable<z.ZodString>;
    unknownAvatarMessage: z.ZodString;
    offlineMessage: z.ZodString;
}, "strip", z.ZodTypeAny, {
    visibility: ClientVisibility;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
}, {
    visibility: ClientVisibility;
    displayName: string;
    bio: string;
    defaultLayoutId: string | null;
    unknownAvatarMessage: string;
    offlineMessage: string;
}>;
export type BasicInfoFormDTO = z.infer<typeof BasicInfoFormSchema>;
