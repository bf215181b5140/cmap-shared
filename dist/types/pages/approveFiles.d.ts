import { z } from 'zod';
export declare const ApproveFilesPageSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    fileName: z.ZodString;
    urlPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    fileName: string;
    urlPath: string;
}, {
    id: string;
    fileName: string;
    urlPath: string;
}>, "many">;
export type ApproveFilesPageDTO = z.infer<typeof ApproveFilesPageSchema>;
