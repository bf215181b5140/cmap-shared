import { z } from 'zod';
export declare const UseAccountKeyFormSchema: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key: string;
}, {
    key: string;
}>;
export type UseAccountKeyFormDTO = z.infer<typeof UseAccountKeyFormSchema>;
