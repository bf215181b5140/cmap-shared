import { z } from 'zod';
export declare const StyleFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    parentId: string;
}, {
    id: string;
    parentId: string;
}>;
export type StyleFormDTO = z.infer<typeof StyleFormSchema>;
