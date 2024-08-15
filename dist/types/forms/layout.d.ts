import { z } from 'zod';
export declare const LayoutFormSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodNullable<z.ZodString>;
    parentId: z.ZodString;
}, {
    label: z.ZodString;
    vrcAvatarId: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
}>, "strip", z.ZodTypeAny, {
    id: string | null;
    label: string;
    parentId: string;
    vrcAvatarId: string;
}, {
    id: string | null;
    label: string;
    parentId: string;
    vrcAvatarId: string;
}>;
export type LayoutFormDTO = z.infer<typeof LayoutFormSchema>;
