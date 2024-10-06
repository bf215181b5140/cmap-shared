import { z } from 'zod';
export declare const UseInviteKeyFormSchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
}, {
    key: string;
}>;
export type UseInviteKeyFormDTO = z.infer<typeof UseInviteKeyFormSchema>;
