import { z } from 'zod';
export declare const LayoutFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
}, {
    label: z.ZodString;
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
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    label: string;
    avatars: {
        id: string | null;
        vrcAvatarId: string;
    }[];
}, {
    id: string | null;
    label: string;
    avatars: {
        id: string | null;
        vrcAvatarId: string;
    }[];
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
