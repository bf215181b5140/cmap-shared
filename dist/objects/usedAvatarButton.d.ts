import { z } from 'zod';
export declare const UsedAvatarButtonSchema: z.ZodObject<{
    value: z.ZodUnion<[z.ZodNumber, z.ZodBoolean]>;
}, "strip", z.ZodTypeAny, {
    value: number | boolean;
}, {
    value: number | boolean;
}>;
export type UsedAvatarButtonDTO = z.infer<typeof UsedAvatarButtonSchema>;
