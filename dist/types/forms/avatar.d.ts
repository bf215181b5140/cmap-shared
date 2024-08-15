import { z } from 'zod';
export declare const AvatarFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    avatars: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
        id: z.ZodNullable<z.ZodString>;
    }, {
        vrcAvatarId: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        id: string | null;
        vrcAvatarId: string;
    }, {
        id: string | null;
        vrcAvatarId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    parentId: string;
    avatars: {
        id: string | null;
        vrcAvatarId: string;
    }[];
}, {
    parentId: string;
    avatars: {
        id: string | null;
        vrcAvatarId: string;
    }[];
}>;
export type AvatarFormDTO = z.infer<typeof AvatarFormSchema>;
