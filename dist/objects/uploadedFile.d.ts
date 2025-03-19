import { z } from 'zod';
export declare const UploadedFileSchema: z.ZodObject<{
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
}>;
export type UploadedFileDTO = z.infer<typeof UploadedFileSchema>;
