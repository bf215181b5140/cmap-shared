import { z } from 'zod';
export declare const AvatarSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodString;
}, {
    vrcAvatarId: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: string;
    vrcAvatarId: string;
}, {
    id: string;
    vrcAvatarId: string;
}>;
export type AvatarDTO = z.infer<typeof AvatarSchema>;
