import { z } from 'zod';
export declare const UsedAvatarButtonSchema: z.ZodObject<{
    vrcAvatarId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    vrcAvatarId: string;
}, {
    vrcAvatarId: string;
}>;
export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
