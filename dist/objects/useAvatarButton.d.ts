import { z } from 'zod';
export declare const UseAvatarButtonSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type UseAvatarButtonDTO = z.infer<typeof UseAvatarButtonSchema>;
