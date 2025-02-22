import { z } from 'zod';
export declare const UsedAvatarButtonSchema: z.ZodObject<{
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
}, {
    value: string;
}>;
export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
