import { z } from 'zod';
export declare const BackgroundFormSchema: z.ZodObject<{
    parentId: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    parentId: string;
}, {
    id: string;
    parentId: string;
}>;
export type BackgroundFormDTO = z.infer<typeof BackgroundFormSchema>;
